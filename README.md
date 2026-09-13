# Development Stack Builder

A modern React + TypeScript application designed to help developers explore and assemble a technology stack for their next project. The app presents a curated list of front-end, back-end, database, and tooling technologies, allowing users to compare options and create a personalized stack.

## Overview

This project is built as a polished interactive UI for selecting development tools and tracking chosen technologies in a side panel. It includes a responsive layout, visual cards, category-based filtering through the data model, and a stack builder experience inspired by modern developer dashboards.

## Features

- Interactive technology card grid
- Add/remove technologies to a personal stack
- Selected stack overview panel
- Responsive design for desktop and mobile layouts
- Modern gradient-based visual styling
- Data-driven list of technologies loaded from JSON
- Built with React, TypeScript, and Vite

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint

## Project Structure

```bash
Assigement 5/
├── public/
│   └── data.json
├── src/
│   ├── assets/
│   ├── compunent/
│   │   ├── Banner.tsx
│   │   ├── card.tsx
│   │   ├── footer.tsx
│   │   ├── Navber.tsx
│   │   └── YourStack.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── type.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
├── index.html
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or newer recommended)
- npm

### Installation

```bash
npm install
```

### Run the app in development mode

```bash
npm run dev
```

Then open the local URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Run TypeScript checks and create a production build
npm run preview  # Preview the final production build locally
npm run lint     # Run ESLint for code quality checks
```

## Data Model

The application loads technology data from `public/data.json`, including fields such as:

- name
- category
- description
- icon
- rating
- difficulty
- badge

This structure makes the app easy to extend with additional technologies or categories in the future.

## Use Case

This project is ideal for:

- Developers exploring different stacks
- Students learning modern web technologies
- Portfolio projects showcasing UI and interaction design
- Prototypes for tech comparison or recommendation tools

## Contribution

Contributions are welcome. If you want to improve the app:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

This project is currently for educational and demonstration purposes.

## Author

Built as a React project focused on modern front-end development and interactive UI design.

---

For questions or improvements, feel free to update the project structure, refine the design system, or expand the technology dataset.
