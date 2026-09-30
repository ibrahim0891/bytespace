# ByteSpace — Online Course & Creator Platform

ByteSpace is a modern e-learning platform and digital asset marketplace designed for learners and creators. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS, ByteSpace features an interactive course discovery system, comprehensive course pages with video previews and enrollment flows, creator profiles, and smooth momentum scrolling.

- **Live Demo**: [https://bytespace-liart.vercel.app/](https://bytespace-liart.vercel.app/)

---

## Table of Contents

- [Project Architecture](#project-architecture)
  - [Component Organization by Module Scope](#component-organization-by-module-scope)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Design System and Styling](#design-system-and-styling)
- [Deployment](#deployment)

---


## Project Architecture

```text
bytespace/
├── app/
│   ├── (auth)/
│   ├── (landing-page)/
│   │   ├── course/
│   │   ├── creator-profile/
│   │   ├── search/
│   │   ├── _component/
│   │   └── _sections/
│   ├── components/
│   ├── data/
│   ├── globals.css
│   └── layout.tsx
├── public/
├── next.config.ts
└── tsconfig.json
```

### Component Organization by Module Scope

Components are co-located by their level of reuse and domain boundaries:

1. **Global Scope (`app/components/`)**:
   - Reusable across all routes and layout hierarchies.
   - Examples: `Container`, `Navbar`, `Footer`, `CourseCard`, `SmoothScroll`, `Typography`.

2. **Route / Module Scope (`_component/` & `_sections/`)**:
   - Private to their parent route using the Next.js `_` prefix convention (excluded from routing).
   - **Landing Page Scope** (`app/(landing-page)/_component/`, `app/(landing-page)/_sections/`):
     - `HeroVisuals`, `HeroSearch`, `FloatingCards`, `DiscoverSection`, `TestimonialsSection`, etc.
   - **Course Module Scope** (`app/(landing-page)/course/_component/`, `app/(landing-page)/course/_sections/`):
     - `CourseTabs`, `CourseAboutTab`, `CourseCurriculumTab`, `CourseReviewsTab`, `VideoModal`, `EnrollmentModal`, `CourseHeroSection`, `CourseContentSection`.
   - **Creator Module Scope** (`app/(landing-page)/creator-profile/[creatorId]/_sections/`):
     - `CreatorHeroSection`, `CreatorCoursesSection`.
   - **Search Module Scope** (`app/(landing-page)/search/_sections/`):
     - `SearchResultsSection`.

---



## Key Features


- **Course Discovery**: Dynamic category filtering across topics like Design, Development, Marketing, Business, and Photography.
- **Course Detail Pages (`/course/[id]`)**:
    - Tabbed interface (`About`, `Lessons/Curriculum`, `Reviews`).
    - Interactive video preview modal.
    - Sticky sidebar with course pricing, author bio, and one-click enrollment modal.
    - Star rating breakdown with custom score distribution.
- **Creator Profiles (`/creator-profile/[creatorId]`)**: Dedicated creator showcase highlighting bios, stats, social links, and published courses.
- **Global Search & Filter (`/search`)**: Real-time course query, category filters, level selection, and sorting.
- **Authentication Pages (`/auth/login`, `/auth/register`)**: Modern authentication interfaces supporting both student and creator roles.
- **Lenis Smooth Scrolling**: Kinetic, smooth momentum scrolling integrated globally across all viewports.
- **Adaptive Layout System**: Reusable `<Container>` architecture ensuring consistent horizontal paddings on mobile, tablet, and desktop screens.

---

## Tech Stack

| Technology                 | Purpose                                                    |
| :------------------------- | :--------------------------------------------------------- |
| **Next.js 16 (Turbopack)** | React Framework with App Router & SSR/SSG support          |
| **React 19**               | Component architecture & client-side interactivity         |
| **TypeScript**             | Type safety and strict interface definitions               |
| **Tailwind CSS v4**        | Modern utility-first styling with inline `@theme` tokens   |
| **Framer Motion**          | Micro-interactions, page transitions, and floating visuals |
| **Lenis**                  | Lightweight smooth scrolling engine                        |
| **Lucide React**           | Consistent UI icon library                                 |
| **Google Fonts (Poppins)** | Clean typography loaded via `next/font`                    |

---

 
## Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn` / `bun`)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/bytespace.git
    cd bytespace
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Development Server

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To build the application for production:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

---

## Design System and Styling

ByteSpace uses **Tailwind CSS v4** with a tokenized color palette defined in [app/globals.css](file:///home/ibrahim/Desktop/bytespace/app/globals.css):

- `--color-brand-blue`: `#003be2` (Primary Brand Blue)
- `--color-brand-lime`: `#d4fb20` (Accent Lime Green)
- `--color-heading`: `#242528` (Primary Dark Text)
- `--color-body`: `#4b4c53` (Muted Neutral Text)
- `--color-muted-border`: `#e4e4e7` (Subtle Border Gray)

Layout consistency is enforced through the `<Container>` component located in [app/components/Container.tsx](file:///home/ibrahim/Desktop/bytespace/app/components/Container.tsx), ensuring fluid responsive paddings across all viewports (`sm:`, `md:`, `lg:`, `xl:`).

---

## Deployment

The application is deployed on Vercel:

- **Production URL**: [https://bytespace-liart.vercel.app/](https://bytespace-liart.vercel.app/)

Continuous deployment is configured automatically on branch pushes.
