# 🍳 Foodieland — Full-Stack Recipe & Blog Web Application

**Live Demo:** [https://foodieland-nextjs.vercel.app/](https://foodieland-nextjs.vercel.app/)

Foodieland is a modern, responsive full-stack web application designed for food lovers, home chefs, and culinary enthusiasts. The platform serves as an interactive hub where users can discover new recipes, filter dishes by category, save their favorite meals, and read insightful culinary articles.

---

## 🎯 Purpose & Features

Foodieland was built to provide a seamless and visually engaging culinary experience. Key features include:

- **Browse & Search Recipes:** Explore a wide variety of recipes complete with preparation times, categories, ingredients list with interactive checkboxes, and step-by-step instructions.
- **Interactive Favorites System:** Save preferred recipes to a personalized favorites list using `localStorage` persistence without requiring account registration.
- **Culinary Blog:** Read cooking articles, news, and guides, complemented by an integrated sidebar with top-rated recipes and live search.
- **Contact & Feedback Form:** A dedicated contact interface allowing users to send inquiries regarding advertising, partnerships, or general feedback.
- **Fully Responsive Design:** Optimized UI for all screen sizes (mobile, tablet, desktop) using Tailwind CSS.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Context API + `localStorage`
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
foodieland/
├── public/               # Static assets (images, icons)
├── src/
│   ├── app/              # Next.js App Router (pages & API routes)
│   │   ├── (auth)/       # Authentication views (if applicable)
│   │   ├── api/          # API endpoints
│   │   ├── blog/         # Blog list & [id] detail routes
│   │   ├── contact/      # Contact page route
│   │   ├── favorites/    # Saved recipes route
│   │   ├── recipes/      # Recipe details & listing routes
│   │   ├── favicon.ico
│   │   ├── globals.css   # Global Tailwind CSS imports
│   │   ├── layout.tsx    # Root layout wrapped with providers
│   │   └── page.tsx      # Landing home page
│   ├── components/       # UI Components
│   │   ├── blog/         # Blog cards & post components
│   │   ├── common/       # Header, Footer, and global navigation
│   │   ├── home/         # Hero banner, category carousels, chef promos
│   │   ├── recipes/      # Recipe cards, ingredients checklist, actions
│   │   └── ui/           # Reusable base UI elements
│   ├── context/          # React Context (FavoritesProvider)
│   ├── data/             # Mock JSON datasets for recipes and articles
│   ├── lib/              # Utility functions and helper modules
│   ├── services/         # API fetching services
│   ├── store/            # State management modules
│   └── types/            # TypeScript interfaces (Recipe, BlogPost)
  ```
# ⚙️ Getting Started
## Prerequisites

Node.js 18.x or higher

npm / yarn / pnpm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Nurislam2121/foodieland.git
cd foodieland
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```
4. Open http://localhost:3000 in your browser.

# 📦 Production Build
```text
npm run build
npm run start
```
