# Canvex Display Website

Official landing page and distribution hub for [Canvex Display](https://canvexdisplay.mtgsoftworks.com). Built with Next.js, optimized for speed, security, and global accessibility.

## Overview
Canvex Display transforms your Android device into a low-latency remote display and control surface for Windows. This repository hosts the modern, responsive web application that introduces the product to users, provides secure download links (including via direct `.msi` pathways), handles legal/support documentation, and acts as the central digital presence for MTG Softworks concerning this software.

## Key Features
- **Next.js App Router Architecture:** Fully server-side rendered and static optimized.
- **Modern UI/UX:** Built cleanly using Tailwind CSS v4, Lucide Icons, and Framer Motion.
- **Advanced SEO Optimization:** Implements strict Open Graph (OG), Twitter Card standards, metadata descriptors, and custom icons for high-fidelity social sharing.
- **Secure File Distribution:** Static `.msi` serving directly from the Next.js `public` directory, ensuring simple and scalable deployment for the Host software downloads.
- **Source-code Locked:** Zero backend endpoints exposing project or company code. Purely a locked-down frontend environment.

## Technology Stack
- **Framework:** Next.js 15
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS (PostCSS)
- **Animations:** Motion (Framer Motion)
- **Deployment Structure:** Static Export & Vercel-ready

## Development Setup
Follow these steps to run the application locally:

```bash
# 1. Install dependencies
yarn install  # or npm install / pnpm i

# 2. Run the development server
yarn dev      # or npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GitHub Pages Deployment
This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that builds and deploys the static export to GitHub Pages.

To publish:
1. Open **Settings → Pages** in the repository.
2. Set **Source** to **GitHub Actions**.
3. Push to the `main` branch (or run the workflow manually from Actions).

The workflow exports static files to `out/` and deploys them automatically.

## Structure
- `/app` - Next.js App Router pages (Home, Privacy, Terms, Support)
- `/components` - Modular React components (Navbar, Footer, Accordion)
- `/public` - Static assets, `.msi` installers, and SEO/favicon files
- `/hooks` & `/lib` - Reusable utilities and custom React hooks

## License
&copy; 2026 MTG Softworks. All Rights Reserved.

*This repository and its codebase are proprietary and strictly confidential. Unauthorized copying, modification, or distribution is prohibited.*
