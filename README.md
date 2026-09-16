# Kedam Chemist

Vite + React website for Kedam Chemist and Multi-Purpose Store.

## Setup

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` and add a Google Maps Embed API key:

```env
VITE_GOOGLE_MAPS_API_KEY=your_key_here
```

The contact form uses the visitor's email client or WhatsApp. No server-side secret is required for those actions.

## Production build

```bash
npm run build
npm run preview
```
