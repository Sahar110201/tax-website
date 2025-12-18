# ST Tax and Accounting Website

A professional, responsive website for ST Tax and Accounting services built with React, TypeScript, Tailwind CSS, and tRPC.

## Features

**Professional Design**
- Beautiful blue gradient color scheme
- Fully responsive (mobile, tablet, desktop)
- Modern UI with Tailwind CSS and shadcn/ui components

**Service Pages**
- Tax Preparation service page with pricing tiers
- Bookkeeping service page with detailed features
- Payroll Processing service page with plans
- Each with comprehensive descriptions, pricing, and CTAs

**Interactive Widgets**
- Real-time clock/timer widget
- Weather widget with current conditions
- Google Maps integration for office locations
- Search functionality

**Navigation**
- Dropdown menu for services
- Mobile-responsive hamburger menu
- Smooth scrolling navigation

**Professional Sections**
- Hero section with gradient background
- Services overview with linked cards
- About section with company stats
- Contact form with call-to-action
- Footer with social links

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4
- **Backend**: Express, tRPC 11
- **Database**: MySQL/TiDB with Drizzle ORM
- **Authentication**: Manus OAuth
- **Testing**: Vitest with React Testing Library
- **Build**: Vite

## Project Structure

```
st-tax-v1/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── TaxPreparation.tsx
│   │   │   ├── Bookkeeping.tsx
│   │   │   ├── Payroll.tsx
│   │   │   └── NotFound.tsx
│   │   ├── components/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Timer.tsx
│   │   │   ├── WeatherWidget.tsx
│   │   │   ├── MapWidget.tsx
│   │   │   └── ui/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   └── index.html
├── server/
│   ├── routers.ts
│   ├── db.ts
│   └── _core/
├── drizzle/
│   └── schema.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm
- MySQL/TiDB database

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd st-tax-v1
```

2. Install dependencies
```bash
pnpm install
```

3. Set up environment variables
Create a `.env.local` file with your configuration

4. Set up the database
```bash
pnpm db:push
```

5. Start development server
```bash
pnpm dev
```

## Available Scripts

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm test         # Run unit tests
pnpm check        # TypeScript type checking
pnpm db:push      # Push schema changes
pnpm format       # Format code
```

## Key Pages

- **Homepage** (`/`) - Main landing page with services overview
- **Tax Preparation** (`/services/tax-preparation`) - Detailed tax service page
- **Bookkeeping** (`/services/bookkeeping`) - Bookkeeping service page
- **Payroll** (`/services/payroll`) - Payroll processing service page

## Customization

### Update Business Information
Edit contact information, pricing, and services in the respective page files.

### Add Google Maps API Key
1. Get API key from Google Cloud Console
2. Add to environment variables: `VITE_GOOGLE_MAPS_API_KEY`
3. Update office locations in MapWidget.tsx

### Add Weather API Key
1. Sign up at OpenWeatherMap
2. Add to environment variables: `VITE_WEATHER_API_KEY`
3. Update location in WeatherWidget.tsx

## Testing

Run the test suite:
```bash
pnpm test
```

## Deployment

### Manus (Built-in Hosting)
Click the Publish button in the Management UI.

### External Hosting
Build the project and deploy the dist folder to your hosting provider.

## Features to Add

- Client testimonials carousel
- Blog/resources section
- Contact form email integration
- Client portal login
- Online appointment booking
- Live chat support
- Newsletter signup

## License

Proprietary - All rights reserved

## Contact

info@sttax.com

---

Built with React, TypeScript, and Tailwind CSS
