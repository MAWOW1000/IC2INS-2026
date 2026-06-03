# ICIIT Astro Website

This is an Astro rebuild of the mirrored ICIIT website. It is designed for:

- SEO-friendly static HTML
- simple page-based development
- reusable layout, navigation, and footer
- responsive improvements over the original mirror

## Run Locally

```bash
npm install
npm run dev
```

Open the URL printed by Astro, usually:

```text
http://127.0.0.1:4321/
```

## Build

```bash
SITE_URL=https://www.iciit.org npm run build
```

The deployable production site is in:

```text
dist/
```

## Structure

```text
src/layouts/BaseLayout.astro     shared HTML head, SEO tags, page shell
src/components/Header.astro      site header
src/components/Navigation.astro  main navigation
src/components/Footer.astro      footer
src/pages/                       real SEO pages
public/site/                     required CSS, favicon files, and images
```

## Format Code

```bash
npm run format
```

Check formatting without changing files:

```bash
npm run format:check
```

VS Code is configured to format on save. Install these extensions for the best
experience:

- Astro
- Prettier - Code formatter

## Development Direction

The current page bodies are hand-authored Astro pages backed by shared data files in `src/lib`.
