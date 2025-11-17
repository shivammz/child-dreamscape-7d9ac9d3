# Next.js Migration - D.V. Singh Foundation

This folder contains all the Next.js-compatible files for the D.V. Singh Foundation website.

## 📁 Folder Structure

```
nextjs-ready/
├── app/
│   ├── layout.tsx        # Root layout with fonts and providers
│   ├── page.tsx          # Home page
│   ├── not-found.tsx     # 404 page
│   └── globals.css       # Global styles
├── components/
│   ├── query-provider.tsx  # TanStack Query provider
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── IntroVideoSection.tsx
│   ├── WhoWeAreSection.tsx
│   ├── InitiativesSection.tsx
│   ├── ImpactStoriesSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── tailwind.config.ts    # Tailwind configuration
├── next.config.mjs       # Next.js configuration
└── README.md            # This file
```

## 🚀 How to Use

1. **Create a new Next.js project** (if you haven't already):
   ```bash
   npx create-next-app@latest my-foundation-site
   ```

2. **Copy files** from this folder to your Next.js project:
   - Copy `app/` folder contents to your `app/` folder
   - Copy `components/` folder contents to your `components/` folder
   - Replace `tailwind.config.ts` with this one
   - Replace `next.config.mjs` with this one

3. **Install dependencies**:
   ```bash
   npm install gsap @tanstack/react-query lucide-react next-themes sonner
   npm install -D tailwindcss-animate
   ```

4. **Copy UI components** from your current project:
   - Copy all files from `src/components/ui/` to `components/ui/`
   - Copy `src/lib/utils.ts` to `lib/utils.ts`
   - Copy `src/hooks/` to `hooks/`

5. **Move images**:
   - Create `public/images/` folder
   - Copy all images from `src/assets/` to `public/images/`

6. **Update imports in UI components**:
   - Change `@/lib/utils` to `@/lib/utils` (should work as-is)
   - Ensure all UI components have proper imports

7. **Run the development server**:
   ```bash
   npm run dev
   ```

## ⚠️ Important Notes

### "use client" Directive
All components with:
- React hooks (`useState`, `useEffect`, `useRef`)
- Event handlers (`onClick`, `onMouseMove`)
- Browser APIs
- GSAP animations

Have the `"use client"` directive at the top.

### Image Handling
- All images use Next.js `<Image>` component
- Images are in `public/images/` folder
- Image paths are `/images/filename.jpg` (no `src` prefix)

### Navigation
- Uses Next.js `<Link>` from `next/link`
- No React Router

### Fonts
- Fonts are loaded in `app/layout.tsx` using `next/font/google`
- CSS variables are set for fonts: `--font-inter` and `--font-playfair`

## 📦 Required Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "gsap": "^3.13.0",
    "@tanstack/react-query": "^5.0.0",
    "lucide-react": "^0.460.0",
    "next-themes": "^0.3.0",
    "sonner": "^1.7.0",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

## 🎨 Styling
- Uses Tailwind CSS with custom design tokens
- All colors use HSL CSS variables
- Custom animations defined in `globals.css`

## 🔍 Troubleshooting

### If you see "use client" errors:
- Make sure interactive components have `"use client"` at the top

### If images don't load:
- Check that images are in `public/images/`
- Verify image paths don't have `src/` prefix

### If fonts don't work:
- Check that `layout.tsx` has font imports
- Verify font CSS variables are in class names

## ✅ Checklist

- [ ] Next.js project created
- [ ] All files copied
- [ ] Dependencies installed
- [ ] UI components copied
- [ ] Images moved to `public/images/`
- [ ] Development server running
- [ ] No TypeScript errors
- [ ] Site loads correctly

## 🎯 What's Different from React + Vite?

1. **File Structure**: `app/` directory instead of `src/pages/`
2. **Routing**: File-based routing, no React Router
3. **Images**: Next.js `<Image>` component with optimization
4. **Fonts**: Loaded via `next/font/google`
5. **Client Components**: Need `"use client"` directive
6. **No Vite**: Uses Next.js bundler

For detailed migration guide, see `MIGRATION_GUIDE.md` in the project root.
