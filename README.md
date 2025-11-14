# Hugo Ramnek – Offizielle Webseite

Moderne, responsive Webseite für den Schriftsteller, Schauspieler und Lehrer Hugo Ramnek.

## Features

- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Animationen**: Smooth Scroll-Animationen mit Framer Motion
- **SEO-optimiert**: Individuelle Meta-Tags für jedes Buch
- **Dynamische Buchseiten**: Jedes Buch hat eine eigene Detailseite
- **Kontaktformular**: Direkte Kontaktaufnahme möglich
- **Performance**: Optimiert mit Next.js 16 und Turbopack

## Technologie-Stack

- **Framework**: Next.js 16 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Animationen**: Framer Motion
- **Fonts**: Google Fonts (Crimson Text, Lato)
- **Bildoptimierung**: Next.js Image Component

## Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Production Server starten
npm start
```

Die Webseite ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Bilder hinzufügen

⚠️ **Wichtig:** Damit die Webseite vollständig angezeigt wird, müssen folgende Bilder hinzugefügt werden:

### Porträtfoto
- Pfad: `/public/hugo-ramnek.jpg`
- Format: JPG, mindestens 800x800px

### Buchcover
Alle im Ordner `/public/covers/`:
- `die-laengste-nacht.jpg`
- `die-schneekugel.jpg`
- `das-letzte-von-leopold.jpg`
- `meine-ge-ge-generation.jpg`
- `der-letzte-badegast.jpg`
- `kettenkarussell.jpg`
- `momentum.jpg`
- `wo-kommen-die-worte-her.jpg`
- `gluecksvogel.jpg`

Siehe `IMAGES_NEEDED.md` für detaillierte Informationen.

## Projektstruktur

```
ramnek/
├── app/
│   ├── buch/
│   │   └── [id]/
│   │       └── page.tsx          # Dynamische Buchseiten
│   ├── globals.css                # Globale Styles
│   ├── layout.tsx                 # Root Layout
│   └── page.tsx                   # Homepage
├── components/
│   ├── Navigation.tsx             # Header Navigation mit Mobile Menu
│   └── HomeContent.tsx            # Hauptinhalt der Homepage
├── data/
│   └── books.ts                   # Buchdaten und Typen
└── public/
    ├── covers/                    # Buchcover-Bilder
    └── hugo-ramnek.jpg            # Porträtfoto
```

## Inhalte bearbeiten

### Bücher hinzufügen/bearbeiten
Bearbeite die Datei `data/books.ts`:

```typescript
export const books: Book[] = [
  {
    id: 'neues-buch',           // Wird in der URL verwendet
    title: 'Buchtitel',
    subtitle: 'Untertitel',
    description: 'Kurzbeschreibung',
    // ... weitere Felder
  },
];
```

### Texte ändern
- **Biografie**: `components/HomeContent.tsx` (Über-Sektion)
- **Live-Performances**: `components/HomeContent.tsx` (Live-Sektion)
- **Kontaktdaten**: `components/HomeContent.tsx` (Kontakt-Sektion)

### Design anpassen
- **Farben**: `app/globals.css` (CSS-Variablen)
- **Schriften**: `app/layout.tsx`
- **Spacing und Layout**: Tailwind-Klassen in den Components

## Kontaktformular

Das Kontaktformular ist vorbereitet, muss aber mit einem Backend-Service verbunden werden:

**Empfohlene Services:**
- [Formspree](https://formspree.io/) - Einfach und kostenlos
- [Web3Forms](https://web3forms.com/) - Kostenlos, keine Registrierung
- [EmailJS](https://www.emailjs.com/) - Client-seitig

### Integration Beispiel (Formspree):

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
};
```

## Deployment

### Vercel (Empfohlen)

1. Push das Projekt auf GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. Importiere das GitHub Repository
4. Vercel erkennt Next.js automatisch
5. Deploy!

### Andere Hosting-Optionen

- **Netlify**: Unterstützt Next.js mit Netlify Adapter
- **AWS Amplify**: Serverless Hosting
- **Docker**: `npm run build` → Docker Image erstellen

## SEO & Performance

- ✅ Responsive Images mit Next.js Image
- ✅ Meta-Tags für Social Media (Open Graph)
- ✅ Individuelle Meta-Tags pro Seite
- ✅ Optimierte Fonts (Google Fonts)
- ✅ Code-Splitting automatisch
- ✅ Smooth Scrolling und Animationen

## Browser-Unterstützung

- Chrome (aktuelle Version)
- Firefox (aktuelle Version)
- Safari (aktuelle Version)
- Edge (aktuelle Version)
- Mobile Browsers (iOS Safari, Chrome Mobile)

## Lizenz

© Hugo Ramnek. Alle Rechte vorbehalten.

Gestaltung & Programmierung: Roman Stalder

## Support

Bei Fragen oder Problemen:
- E-Mail: ramnek@sunrise.ch
- Telefon: +41 44 422 60 84
