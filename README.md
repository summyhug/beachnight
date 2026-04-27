# Beachnight

**One Night. Every Shore. One Signal.**

A nonprofit website for Beachnight—a global movement uniting businesses and organizations in a single night of solidarity for coastal conservation.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Three.js** (via @react-three/fiber) for the 3D globe on the home page
- **TypeScript**

## Brand

- **Background:** `#0A1628` (ocean dark)
- **Primary accent:** `#00F5D4` (bioluminescent teal)
- **Secondary:** `#FFD166` (moonlit gold)
- **Danger/urgency:** `#EF476F`
- **Fonts:** Playfair Display (headings), Inter (body)

## Pages

- **Home** — Hero with rotating 3D globe, animated headline, stat cards
- **About** — Mission statement, team placeholders
- **Join** — Registration form

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Note:** If you see `EMFILE: too many open files` errors on macOS, increase your file descriptor limit:
```bash
ulimit -n 10240
```

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel with one click—the project is configured for zero-config deployment.

## Project Structure

```
beachnight/
├── app/
│   ├── about/page.tsx
│   ├── globals.css
│   ├── join/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Globe.tsx
│   ├── Navbar.tsx
│   ├── StatCard.tsx
│   └── WaveDivider.tsx
├── package.json
├── tailwind.config.ts
└── README.md
```

## Constraints

- No authentication
- No database—all data is hardcoded or mocked
- Deploy-ready on Vercel
