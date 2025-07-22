# Sudhir Mhamane - Portfolio Website

A modern, responsive portfolio website built with **React** and **Tailwind CSS** to showcase my skills, projects, certificates, and contact information.

## Deployment

Live Demo: [https://sudhirmhamane.vercel.app/](https://sudhirmhamane.vercel.app/)

## Features

- Smooth scrolling navigation
- Animated section reveals on scroll
- Responsive design for all devices
- Project and certificate galleries with modal previews
- Contact form (Formspree integration)
- Downloadable resume
- Social media and Unstop profile links

## Tech Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/sudhirmhamane/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

## Project Structure

```
├── public/
│   ├── certificate1.jpg
│   ├── ...
│   └── resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About/
│   │   ├── Certificates/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Home/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── utils/
│   │   ├── ScrollReveal.jsx
│   │   └── smoothScroll.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── ...
```

Ready to deploy on [Vercel](https://vercel.com/) or any static hosting service. The included `vercel.json` handles SPA routing.

## License

This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio!

---