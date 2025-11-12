# Quick Start Guide

## Step 1: Install Dependencies

```bash
cd website
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

Your website will be available at `http://localhost:5173`

## Step 3: Build for Production

```bash
npm run build
```

## Step 4: Deploy (Choose One)

### 🚀 Vercel (Easiest - Recommended)

1. Create a GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

3. Go to [vercel.com](https://vercel.com)
4. Sign up with GitHub
5. Click "New Project" > Import your repo
6. Click "Deploy" (Vercel auto-detects Vite)
7. Done! Your site is live!

### 🌐 Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. "Add new site" > "Import an existing project"
5. Select your repo
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Deploy!

### 📄 GitHub Pages

1. Update `vite.config.js`:
```js
base: '/your-repo-name/'
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repo settings (Settings > Pages > Source: gh-pages branch)

## Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light theme toggle
✅ Smooth animations (Framer Motion)
✅ Interactive components
✅ SEO-friendly
✅ Fast loading
✅ Modern UI/UX

## Customization Tips

- **Colors**: Edit `tailwind.config.js` for theme colors
- **Content**: Update component files in `src/components/`
- **Animations**: Modify Framer Motion props in components
- **Skills**: Edit `Skills.jsx` to add/remove skills
- **Projects**: Update `Projects.jsx` with your projects

## Need Help?

Check the main README.md for more details!

