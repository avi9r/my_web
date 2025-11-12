# Deployment Guide - GitHub & Vercel

## ✅ Step 1: Git Repository Initialized

Your local git repository has been initialized and all files are committed!

## 📤 Step 2: Push to GitHub

### Option A: Using GitHub CLI (if installed)

```bash
gh repo create avinash-portfolio --public --source=. --remote=origin --push
```

### Option B: Manual Steps (Recommended)

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon in the top right > "New repository"
   - Repository name: `avinash-portfolio` (or any name you prefer)
   - Description: "My Portfolio Website"
   - Choose: **Public** (required for free hosting)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Connect and push your code:**
   
   Copy the repository URL from GitHub (it will look like: `https://github.com/yourusername/avinash-portfolio.git`)
   
   Then run these commands (replace YOUR_USERNAME and REPO_NAME):
   
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git push -u origin main
   ```
   
   Or if you prefer SSH:
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
   git push -u origin main
   ```

## 🚀 Step 3: Deploy to Vercel

### Method 1: Via Vercel Website (Easiest)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - **Sign in with GitHub** (this connects your accounts)

2. **Import your repository:**
   - Click "Add New..." > "Project"
   - You'll see your GitHub repositories listed
   - Find and click "Import" next to your portfolio repository

3. **Configure project (usually auto-detected):**
   - Framework Preset: **Vite** (should be auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

5. **Custom Domain (Optional):**
   - Go to Project Settings > Domains
   - Add your custom domain if you have one

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd website
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? (press enter for default)
# - Directory? ./ (press enter)
# - Override settings? No
```

## ✨ Step 4: Automatic Deployments

Once connected, Vercel will automatically deploy:
- ✅ Every push to `main` branch = Production deployment
- ✅ Every pull request = Preview deployment

## 🔄 Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically rebuild and deploy your changes!

## 📝 Quick Commands Reference

```bash
# Check git status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# View git log
git log --oneline
```

## 🎉 You're Done!

Your portfolio will be live at: `https://your-project-name.vercel.app`

Share this URL on your resume, LinkedIn, and anywhere else!

