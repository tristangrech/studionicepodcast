# Studio Nice Podcast Website

Professional podcast recording studio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎙️ Professional hero section with compelling CTAs
- 💰 Clear pricing packages (Starter, Professional, Premium)
- 🎨 Modern dark theme with gold accents
- 📱 Fully responsive design
- 💬 WhatsApp integration for instant contact
- 🎯 SEO optimized with proper meta tags
- ⚡ Fast performance with Next.js 14
- 🔍 FAQ section for common questions
- 📍 Location and contact information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The website is ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## Customization

### WhatsApp Number

Update the WhatsApp number in `lib/constants.ts`:
```typescript
export const WHATSAPP_NUMBER = '33678496126'
```

### Colors

Modify colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#201B17',
  accent: '#D4AF37',
  'accent-light': '#F4CF57',
}
```

### Content

Update text content in respective component files in the `components/` directory.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Font**: Montserrat (Google Fonts)

## Contact

For support or inquiries, contact us via WhatsApp at +33 6 78 49 61 26

---

Built with ❤️ in Nice, France
