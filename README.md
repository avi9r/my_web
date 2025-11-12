# Avinash Ranjan - Portfolio Website

A modern, interactive, and responsive portfolio website showcasing my skills, experience, and projects.

## Features

- ✨ Modern and interactive UI with smooth animations
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- 🎨 Beautiful gradient effects and animations
- ⚡ Fast and optimized with Vite
- 🚀 Ready for deployment

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion (Animations)
- React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Vite settings
7. Click "Deploy"
8. Your site will be live in minutes!

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up/login with GitHub
4. Click "Add new site" > "Import an existing project"
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Update vite.config.js base to your repo name:
```js
base: '/your-repo-name/'
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Render

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Create a new "Static Site"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

## Customization

- Update personal information in component files
- Modify colors in `tailwind.config.js`
- Add/remove projects in `Projects.jsx`
- Update skills in `Skills.jsx`
- Modify animations in component files

## License

This project is open source and available under the MIT License.

