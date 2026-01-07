# Yawar Shahid — Portfolio

Backend engineer portfolio showcasing production systems in healthcare, logistics, and finance.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Content**: MDX with remark-gfm

## Features

- **Systems Showcase**: Detailed case studies of production backend systems
- **Domain Expertise**: Healthcare, Logistics, Finance
- **MDX Content**: Rich markdown with code highlighting and tables
- **Responsive Design**: Mobile-first, dark mode support
- **SEO Optimized**: Meta tags, Open Graph, structured data

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/           # How I Work page
│   ├── contact/         # Contact page
│   ├── notes/           # Blog/Notes section
│   └── systems/         # Project case studies
├── components/          # React components
│   ├── layout/          # Navbar, Footer
│   └── ui/              # shadcn/ui components
├── content/             # MDX content
│   ├── projects/        # System case studies
│   └── notes/           # Blog posts
└── lib/                 # Utilities (MDX parsing, metadata)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content

### Systems (Projects)
- **RPA Pipeline System** — Healthcare automation, Playwright, Celery
- **Dispatch Goods Operations Platform** — Logistics, QuickBooks/Heymarket integrations
- **SEC Filings Intelligence System** — Finance, RAG architecture, OpenAI

### Adding New Content

Create MDX files in `src/content/projects/` or `src/content/notes/` with appropriate frontmatter.

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## License

MIT
