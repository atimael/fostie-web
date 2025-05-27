# Fostie Website

A simple, clean website for the Fostie macOS application built with Next.js 15.3 and Tailwind CSS v4. Uses pnpm for package management and Biome.js for formatting and linting.

## Features

- **Support Page**: Centralized support information with contact email
- **Privacy Policy**: Comprehensive privacy policy for App Store compliance
- **Terms of Service**: Legal terms and conditions
- **Responsive Design**: Works on all devices
- **Static Export**: Can be deployed to any static hosting service
- **Modern Tooling**: Uses pnpm, Biome.js, Prettier, and latest Tailwind CSS v4 with CSS-first configuration

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Format code with Biome.js
pnpm format:fix

# Lint code with Biome.js
pnpm lint:fix

# Check both formatting and linting
pnpm check:fix

# Format with Prettier (alternative)
npx prettier --write .
```

### Building for Production

To create a static export for deployment:

```bash
pnpm build
```

This will generate a static website in the `out` directory that can be deployed to any static hosting service.

## Deployment

The website is configured for static export and can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## Structure

- `/app/page.tsx` - Main homepage with support information
- `/app/privacy/page.tsx` - Privacy policy page
- `/app/terms/page.tsx` - Terms of service page
- `/app/layout.tsx` - Root layout with metadata
- `/app/globals.css` - Global styles with Tailwind CSS v4 import
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS v4
- `biome.json` - Biome.js configuration for linting and formatting
- `.prettierrc` - Prettier configuration
- `pnpm-lock.yaml` - pnpm lockfile

## Customization

To customize the website:

1. Update contact email in all pages (currently `test@gmail.com`)
2. Modify the app name and description in `app/layout.tsx`
3. Update legal content in privacy and terms pages
4. Customize styling in Tailwind classes

## Tailwind CSS v4 Features

This project uses the latest Tailwind CSS v4 with:

- **CSS-first configuration** - No more `tailwind.config.js` file needed
- **Simplified imports** - Uses `@import "tailwindcss"` instead of `@tailwind` directives
- **Modern CSS features** - Built on cascade layers, registered custom properties, and `color-mix()`
- **Improved performance** - Up to 5x faster builds and 100x faster incremental rebuilds

## Apple App Store Compliance

This website includes all necessary components for Apple App Store Connect review:

- Privacy Policy
- Terms of Service
- Support contact information
- Copyright notices
- Apple trademark disclaimers

## License

© 2024 Fostie. All rights reserved.
