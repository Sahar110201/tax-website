# ST Tax and Accounting Website

A professional, responsive website for ST Tax and Accounting services built with React, TypeScript, Tailwind CSS, and tRPC.

## Features

✅ **Professional Design**
- Beautiful blue gradient color scheme
- Fully responsive (mobile, tablet, desktop)
- Modern UI with Tailwind CSS and shadcn/ui components

✅ **Service Pages**
- Tax Preparation service page with pricing tiers
- Bookkeeping service page with detailed features
- Payroll Processing service page with plans
- Each with comprehensive descriptions, pricing, and CTAs

✅ **Interactive Widgets**
- Real-time clock/timer widget
- Weather widget with current conditions
- Google Maps integration for office locations
- Search functionality

✅ **Navigation**
- Dropdown menu for services
- Mobile-responsive hamburger menu
- Smooth scrolling navigation

✅ **Professional Sections**
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
│   │   │   ├── Home.tsx                 # Homepage with services
│   │   │   ├── TaxPreparation.tsx       # Tax prep service page
│   │   │   ├── Bookkeeping.tsx          # Bookkeeping service page
│   │   │   ├── Payroll.tsx              # Payroll service page
│   │   │   └── NotFound.tsx             # 404 page
│   │   ├── components/
│   │   │   ├── Navigation.tsx           # Main navigation
│   │   │   ├── Footer.tsx               # Footer component
│   │   │   ├── Timer.tsx                # Timer widget
│   │   │   ├── WeatherWidget.tsx        # Weather widget
│   │   │   ├── MapWidget.tsx            # Google Maps widget
│   │   │   └── ui/                      # shadcn/ui components
│   │   ├── App.tsx                      # Main app with routing
│   │   ├── main.tsx                     # Entry point
│   │   └── index.css                    # Global styles
│   ├── public/                          # Static assets
│   └── index.html
├── server/
│   ├── routers.ts                       # tRPC procedures
│   ├── db.ts                            # Database queries
│   └── _core/                           # Framework internals
├── drizzle/
│   └── schema.ts                        # Database schema
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

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd st-tax-v1
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
Create a `.env.local` file with:
```
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
VITE_APP_TITLE=ST Tax and Accounting
VITE_APP_LOGO=your_logo_url
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_WEATHER_API_KEY=your_weather_api_key
```

4. **Set up the database**
```bash
pnpm db:push
```

5. **Start development server**
```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

```bash
# Development
pnpm dev          # Start dev server with hot reload

# Building
pnpm build        # Build for production
pnpm start        # Start production server

# Testing
pnpm test         # Run unit tests
pnpm check        # TypeScript type checking

# Database
pnpm db:push      # Push schema changes to database

# Code quality
pnpm format       # Format code with Prettier
```

## Key Pages

- **Homepage** (`/`) - Main landing page with services overview
- **Tax Preparation** (`/services/tax-preparation`) - Detailed tax service page
- **Bookkeeping** (`/services/bookkeeping`) - Bookkeeping service page
- **Payroll** (`/services/payroll`) - Payroll processing service page

## Customization

### Update Business Information
Edit the following files to customize for your business:

1. **Contact Information** - Update phone, email, address in:
   - `client/src/pages/Home.tsx`
   - `client/src/components/Footer.tsx`
   - All service pages

2. **Pricing** - Modify pricing tiers in:
   - `client/src/pages/TaxPreparation.tsx`
   - `client/src/pages/Bookkeeping.tsx`
   - `client/src/pages/Payroll.tsx`

3. **Colors** - Update color scheme in:
   - `client/src/index.css` (CSS variables)
   - Tailwind classes throughout components

4. **Services** - Add/modify services in:
   - `client/src/pages/Home.tsx` (services array)
   - Create new service pages as needed

### Add Google Maps API Key
1. Get your API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Add to environment variables: `VITE_GOOGLE_MAPS_API_KEY`
3. Update office locations in `client/src/components/MapWidget.tsx`

### Add Weather API Key
1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Add to environment variables: `VITE_WEATHER_API_KEY`
3. Update location in `client/src/components/WeatherWidget.tsx`

## Testing

Run the test suite:
```bash
pnpm test
```

Tests are located in:
- `client/src/components/*.test.tsx`
- `server/*.test.ts`

## Deployment

### Option 1: Manus (Built-in Hosting)
The website is ready to deploy on Manus with custom domain support. Click the Publish button in the Management UI.

### Option 2: External Hosting (Vercel, Netlify, etc.)

1. **Build the project**
```bash
pnpm build
```

2. **Deploy to your hosting provider**
- Vercel: Connect your GitHub repo
- Netlify: Connect your GitHub repo
- Other: Deploy the `dist` folder

## Features to Add

Consider these enhancements:
- Client testimonials carousel
- Blog/resources section
- Contact form email integration
- Client portal login
- Online appointment booking
- Live chat support
- Newsletter signup
- Service comparison tool

## Support & Maintenance

- Update dependencies regularly: `pnpm update`
- Keep TypeScript strict: `pnpm check`
- Run tests before deployment: `pnpm test`
- Monitor performance and accessibility

## License

This project is proprietary. All rights reserved.

## Contact

For questions or support, contact: info@sttax.com

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
