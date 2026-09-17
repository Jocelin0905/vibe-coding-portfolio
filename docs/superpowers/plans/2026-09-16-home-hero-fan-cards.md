# Home Hero Fan Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the homepage hero with the approved personal-lab copy and a responsive three-project fan-card composition.

**Architecture:** Keep `projects.ts` unchanged and derive all hero cards from `featuredProjects`. Implement the structure in `HomePage.tsx`, presentation and responsive behavior in `global.css`, and lock visible behavior in the existing route test.

**Tech Stack:** React, TypeScript, native CSS, React Router, Vitest, React Testing Library.

---

### Task 1: Lock hero content and links

**Files:**
- Modify: `src/app/App.test.tsx`
- Test: `src/app/App.test.tsx`

- [ ] Add a homepage test for `Things I Wish Existed`, the two approved supporting lines, and three hero links.
- [ ] Run the focused test and confirm it fails because the old hero is still rendered.

### Task 2: Implement the fan-card hero

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/styles/global.css`

- [ ] Replace only the hero copy with the approved wording.
- [ ] Map `featuredProjects` into three linked cards with slug-based modifier classes.
- [ ] Create the desktop fan transforms and restrained hover/focus states.
- [ ] Add the Life Roulette left-center focal point.
- [ ] Convert the fan to an upright horizontal snap strip at mobile widths.
- [ ] Run the focused test and confirm it passes.

### Task 3: Verify regression safety

**Files:**
- No production files expected.

- [ ] Run the full test suite and production build.
- [ ] Check the homepage at 320, 375, 390, 430, tablet, and desktop widths for overflow.
- [ ] Confirm the three product links work and the remaining homepage and case-study routes are unchanged.
