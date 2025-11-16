# Next.js Migration Guide for D.V. Singh Foundation Website

## Overview
This guide will help you migrate this Lovable (React + Vite) project to Next.js 14+ with App Router.

---

## Current Tech Stack
- **Framework:** React 18 + Vite
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS
- **Animations:** GSAP
- **UI Components:** Radix UI + shadcn/ui
- **State Management:** TanStack Query

---

## Next.js Equivalent Stack
- **Framework:** Next.js 14+ (App Router)
- **Routing:** Built-in App Router (`app/` directory)
- **Styling:** Tailwind CSS (same)
- **Animations:** GSAP (same)
- **UI Components:** Radix UI + shadcn/ui (same, with small adjustments)
- **State Management:** TanStack Query (same)

---

## Migration Steps

### 1. Create Next.js Project
```bash
npx create-next-app@latest dv-singh-foundation --typescript --tailwind --app --no-src-dir
cd dv-singh-foundation
```

### 2. Install Dependencies
```bash
npm install gsap @tanstack/react-query
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip
npm install class-variance-authority clsx tailwind-merge lucide-react sonner
npm install embla-carousel-react react-hook-form @hookform/resolvers zod
```

### 3. Project Structure Mapping

#### Current Structure (Lovable/Vite)
```
src/
├── components/
│   ├── ui/           # shadcn components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   └── ...
├── pages/
│   ├── Index.tsx     # Home page
│   └── NotFound.tsx
├── lib/
│   └── utils.ts
├── hooks/
│   └── use-toast.ts
├── assets/          # Images
└── index.css        # Global styles
```

#### Next.js Structure (App Router)
```
app/
├── layout.tsx        # Root layout (replaces App.tsx)
├── page.tsx          # Home page (replaces pages/Index.tsx)
├── not-found.tsx     # 404 page
└── globals.css       # Global styles (replaces index.css)

components/
├── ui/              # shadcn components (same)
├── Header.tsx
├── HeroSection.tsx
└── ...

lib/
└── utils.ts         # Same

hooks/
└── use-toast.ts     # Same

public/
└── images/          # Move assets here
```

### 4. File-by-File Migration

#### A. Root Layout (`app/layout.tsx`)
Replace `src/App.tsx` with:

```typescript
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/query-provider";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "D.V. Singh Foundation for Child Development | Every Child Deserves to Dream",
  description: "Empowering underprivileged children through education, care, and hope. Join us in nurturing dreams and building brighter futures for children in need.",
  authors: [{ name: "D.V. Singh Foundation" }],
  openGraph: {
    title: "D.V. Singh Foundation for Child Development",
    description: "Every child deserves the chance to dream. Your kindness can light the path for a child's tomorrow.",
    type: "website",
    images: [{ url: "https://lovable.dev/opengraph-image-p98pqg.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DVSinghFoundation",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter">
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
```

#### B. Query Provider (`components/query-provider.tsx`)
Create this client component:

```typescript
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

#### C. Home Page (`app/page.tsx`)
Replace `src/pages/Index.tsx` with:

```typescript
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroVideoSection from "@/components/IntroVideoSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import InitiativesSection from "@/components/InitiativesSection";
import ImpactStoriesSection from "@/components/ImpactStoriesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <HeroSection />
        <IntroVideoSection />
        <WhoWeAreSection />
        <InitiativesSection />
        <ImpactStoriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
```

#### D. 404 Page (`app/not-found.tsx`)
Replace `src/pages/NotFound.tsx` with:

```typescript
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
```

#### E. Global Styles (`app/globals.css`)
Copy `src/index.css` content exactly as-is. No changes needed.

#### F. Tailwind Config (`tailwind.config.ts`)
Update content paths:

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  // ... rest stays the same
} satisfies Config;
```

### 5. Component Updates

#### Components with Client-Side Features
Add `"use client"` directive at the top of these files:
- `components/Header.tsx` (uses useState, useEffect, GSAP)
- `components/HeroSection.tsx` (uses useEffect, useRef, GSAP)
- `components/IntroVideoSection.tsx` (uses useEffect, useRef, GSAP)
- `components/WhoWeAreSection.tsx` (uses useEffect, useRef, GSAP)
- `components/InitiativesSection.tsx` (uses useEffect, useRef, GSAP)
- `components/ImpactStoriesSection.tsx` (uses useState, useEffect, GSAP)
- `components/CTASection.tsx` (uses useEffect, useRef, GSAP)
- All `components/ui/*` that use hooks

Example:
```typescript
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
// ... rest of component
```

### 6. Image Handling

#### Current (Vite)
```typescript
import heroImage from "@/assets/hero-children.jpg";
<img src={heroImage} alt="..." />
```

#### Next.js (Optimized)
```typescript
import Image from "next/image";
import heroImage from "@/public/images/hero-children.jpg";

<Image 
  src={heroImage} 
  alt="..." 
  fill
  className="object-cover"
  priority
/>
```

**Migration Steps:**
1. Move all files from `src/assets/` to `public/images/`
2. Replace `<img>` tags with Next.js `<Image>` component
3. Add `width`, `height`, or `fill` prop
4. Add `priority` for above-the-fold images

### 7. Navigation Updates

#### Remove React Router
No need for `react-router-dom` in Next.js.

#### Update Links
Replace all `<a>` tags with Next.js `<Link>`:

```typescript
// Before (React Router)
import { Link } from "react-router-dom";
<Link to="/about">About</Link>

// After (Next.js)
import Link from "next/link";
<Link href="/about">About</Link>
```

### 8. Environment Variables

#### Vite Format
```
VITE_API_KEY=xxx
```

#### Next.js Format
```
NEXT_PUBLIC_API_KEY=xxx
```

Access in code:
```typescript
// Before
import.meta.env.VITE_API_KEY

// After
process.env.NEXT_PUBLIC_API_KEY
```

### 9. Static Assets

Move everything from `public/` as-is. Next.js serves files from `/public` at the root URL.

### 10. GSAP Considerations

GSAP works in Next.js but needs client-side rendering. Always use `"use client"` directive in components using GSAP.

### 11. Testing Migration

1. Run development server:
   ```bash
   npm run dev
   ```

2. Check these features work:
   - [ ] Page loads without errors
   - [ ] Images display correctly
   - [ ] GSAP animations trigger
   - [ ] Navigation works
   - [ ] Forms function properly
   - [ ] Toast notifications appear
   - [ ] Responsive design works

3. Build for production:
   ```bash
   npm run build
   npm start
   ```

### 12. Deployment

Next.js apps can be deployed to:
- **Vercel** (recommended, zero-config)
- **Netlify**
- **AWS Amplify**
- **Docker** (self-hosted)

```bash
# Deploy to Vercel
npm i -g vercel
vercel
```

---

## Key Differences Summary

| Feature | Lovable (Vite) | Next.js |
|---------|---------------|---------|
| Routing | React Router | App Router |
| Pages | `src/pages/Index.tsx` | `app/page.tsx` |
| Layouts | Manual in each page | `app/layout.tsx` |
| Images | `<img>` + imports | `<Image>` component |
| Client JS | All components | Add `"use client"` |
| Env vars | `VITE_*` | `NEXT_PUBLIC_*` |
| Fonts | Google Fonts CDN | `next/font` |
| Metadata | Manual in HTML | `export const metadata` |

---

## Common Issues & Solutions

### Issue: "You're importing a component that needs useState"
**Solution:** Add `"use client"` at the top of the file.

### Issue: Images not loading
**Solution:** Move images to `public/` and use correct paths.

### Issue: GSAP not animating
**Solution:** Ensure component has `"use client"` directive.

### Issue: Tailwind classes not working
**Solution:** Check `content` paths in `tailwind.config.ts`.

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [shadcn/ui with Next.js](https://ui.shadcn.com/docs/installation/next)
- [GSAP with Next.js](https://greensock.com/react-advanced/#nextjs)

---

## Support

For questions about this migration:
1. Check Next.js docs: https://nextjs.org/docs
2. shadcn/ui docs: https://ui.shadcn.com
3. GSAP forums: https://greensock.com/forums/

Good luck with your migration! 🚀
