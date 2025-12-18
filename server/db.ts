import { eq, gte, lte } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, appointments, Appointment, InsertAppointment } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Appointment queries
export async function createAppointment(appointment: InsertAppointment): Promise<Appointment | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create appointment: database not available");
    return null;
  }

  try {
    const result = await db.insert(appointments).values(appointment);
    const id = result[0]?.insertId as number;
    
    if (id) {
      const created = await db.select().from(appointments).where(eq(appointments.id, id)).limit(1);
      return created[0] || null;
    }
    return null;
  } catch (error) {
    console.error("[Database] Failed to create appointment:", error);
    throw error;
  }
}

export async function getAppointmentById(id: number): Promise<Appointment | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get appointment: database not available");
    return null;
  }

  const result = await db.select().from(appointments).where(eq(appointments.id, id)).limit(1);
  return result[0] || null;
}

export async function getUpcomingAppointments(): Promise<Appointment[]> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get appointments: database not available");
    return [];
  }

  const now = new Date();
  const result = await db.select().from(appointments)
    .where(gte(appointments.appointmentDate, now))
    .orderBy(appointments.appointmentDate);
  
  return result;
}

export async function getAppointmentsNeedingReminder(minutesBefore: number): Promise<Appointment[]> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get appointments: database not available");
    return [];
  }

  const now = new Date();
  const reminderTime = new Date(now.getTime() + minutesBefore * 60000);
  
  let query = db.select().from(appointments)
    .where(
      gte(appointments.appointmentDate, now) &&
      lte(appointments.appointmentDate, reminderTime) &&
      eq(appointments.status, "confirmed")
    );

  if (minutesBefore === 1440) { // 24 hours
    query = db.select().from(appointments)
      .where(
        gte(appointments.appointmentDate, now) &&
        lte(appointments.appointmentDate, reminderTime) &&
        eq(appointments.status, "confirmed")
      );
  } else if (minutesBefore === 720) { // 12 hours
    query = db.select().from(appointments)
      .where(
        gte(appointments.appointmentDate, now) &&
        lte(appointments.appointmentDate, reminderTime) &&
        eq(appointments.status, "confirmed")
      );
  } else if (minutesBefore === 60) { // 1 hour
    query = db.select().from(appointments)
      .where(
        gte(appointments.appointmentDate, now) &&
        lte(appointments.appointmentDate, reminderTime) &&
        eq(appointments.status, "confirmed")
      );
  }

  return query;
}

export async function updateAppointmentReminder(id: number, reminderType: "24h" | "12h" | "1h"): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update appointment: database not available");
    return;
  }

  const updateData: Record<string, Date> = {};
  
  if (reminderType === "24h") {
    updateData.reminder24hSent = new Date();
  } else if (reminderType === "12h") {
    updateData.reminder12hSent = new Date();
  } else if (reminderType === "1h") {
    updateData.reminder1hSent = new Date();
  }

  await db.update(appointments).set(updateData).where(eq(appointments.id, id));
}

export async function updateAppointmentConfirmation(id: number): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update appointment: database not available");
    return;
  }

  await db.update(appointments)
    .set({ confirmationSent: new Date(), status: "confirmed" })
    .where(eq(appointments.id, id));
}
