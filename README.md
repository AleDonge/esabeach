# ESABEACH — Next.js 14 Luxury Landing Page

Progetto completo, responsive e pronto per la pubblicazione, costruito per replicare il mockup ESABEACH con estetica luxury hospitality, navbar glass, hero cinematico, sezioni Experience/Events, CTA sabbia e footer minimale.

## Stack

- Next.js 14 / React
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis smooth scroll
- Lucide React

## Installazione

```bash
npm install
```

## Avvio in sviluppo

```bash
npm run dev
```

Apri il browser su:

```txt
http://localhost:3000
```

## Build produzione

```bash
npm run build
npm start
```

## Dove inserire immagini/video reali

Sostituisci i placeholder in `public/media/` con file reali mantenendo gli stessi nomi, oppure aggiorna i path dentro `data/site.ts`.

Asset consigliati:

```txt
hero: golden-hour sea / pool / silhouette cinematic, 2400x1600, WebP o AVIF -- FATTO
experience: cocktail sunset vertical, 1200x1600, WebP -- FATTO
thumbnails: beach, dj, food, aperitif, 800x500, WebP 
video opzionale: public/media/hero-video.mp4, autoplay muted playsInline
```

Nel componente `Hero.tsx` trovi già il blocco video commentato.
