# 📦 JDR Project Migration Checklist

Use this checklist to track the separation of the JDR application from the main portfolio website into a standalone Next.js project.

## 🔲 Phase 1: New Project Initialization

- [x] Initialize new Next.js project (`npx create-next-app jdr-app`).
- [x] Install core dependencies (Prisma, Tailwind CSS, lucide-react, etc.).
- [x] Copy basic configuration files.
- [x] Set up `.env` file for the new project (Database URL, etc.).

## 🔲 Phase 2: Database & Schema Migration

- [x] Extract JDR models from the main `schema.prisma`:
    - [x] `Room`
    - [x] `Player`
    - [x] `Draw`
    - [x] `Card` (or move to a static JSON file as per optimization strategies).
- [x] Setup Prisma in the new project (`npx prisma init`).
- [x] Paste the extracted models into the new `schema.prisma`.
- [x] Run `npx prisma db push` or `npx prisma migrate dev` to generate the new database tables.
- [x] Setup the Prisma client singleton (`src/lib/db.ts`).

## 🔲 Phase 3: Backend Logic & Server Actions

- [x] Move `src/lib/jdr-actions.ts` to the new project.
- [x] Review and update imports in `jdr-actions.ts` (ensure database paths are correct).
- [ ] **Optimization (Optional but recommended during move):**
    - [ ] Refactor `setInterval` polling to Server-Sent Events (SSE), WebSockets, or Supabase/Pusher.
    - [ ] Refactor random row selection to use `prisma.$queryRaw` for better performance.

## 🔲 Phase 4: Frontend Pages & Components

- [ ] Move JDR UI components (Cards, Deck, Fullscreen views, Game Board).
- [ ] Move routing pages:
    - [ ] Entry point / Room creation page.
    - [x] `src/app/jdr/[code]/page.tsx` (Dynamic room page).
- [x] Move static assets:
    - [x] Card images / backgrounds from the `public/` directory.
    - [x] Any specific icons or sounds used in the JDR.

## 🔲 Phase 5: Cleanup Main Website (Post-Migration)

- [ ] Remove JDR Prisma models from the main website's `schema.prisma`.
- [ ] Generate new Prisma client (`npx prisma generate`) and migrate to drop tables.
- [ ] Delete `src/lib/jdr-actions.ts` from the main website.
- [ ] Delete JDR pages and components from the main website `src/app/jdr`.
- [ ] Remove JDR-specific static assets from `public/` to free up space.
- [ ] Update navigation/links on the main website to point to the new JDR subdomain/URL (if applicable).

## 🔲 Phase 6: Deployment

- [ ] Connect the new JDR repository to Vercel (or preferred hosting).
- [ ] Add production Environment Variables.
- [ ] Deploy and test room creation, drawing, and GM controls.
