import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface TimeUnit {
  label: string;
  value: number;
}

export default function Timer() {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([
    { label: "Days", value: 0 },
    { label: "Hours", value: 0 },
    { label: "Minutes", value: 0 },
    { label: "Seconds", value: 0 },
  ]);

  useEffect(() => {
    const calculateCountdown = () => {
      // Tax deadline: April 15th of next year
      const now = new Date();
      let deadline = new Date(now.getFullYear(), 3, 15); // April 15

      // If we've already passed April 15 this year, set it to next year
      if (now > deadline) {
        deadline = new Date(now.getFullYear() + 1, 3, 15);
      }

      const difference = deadline.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeUnits([
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ]);
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {timeUnits.map((unit, index) => (
        <Card
          key={index}
          className="p-6 text-center bg-white border-2 border-emerald-200 hover:border-emerald-400 transition-colors"
        >
          <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-sm md:text-base font-semibold text-gray-700">
            {unit.label}
          </div>
        </Card>
      ))}
    </div>
  );
}
