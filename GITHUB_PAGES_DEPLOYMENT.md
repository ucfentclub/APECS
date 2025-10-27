# GitHub Pages Deployment Guide

## 📦 What's Included

Your project now has everything needed for GitHub Pages deployment:

✅ `.github/workflows/deploy.yml` - Automatic deployment workflow  
✅ `public/404.html` - Handles React Router on GitHub Pages  
✅ `index.html` - Updated with redirect script  
✅ `vite.config.ts` - Configured with base path for GitHub Pages

---

## 🚀 Deployment Steps

### Step 1: Update Repository Name in Config

**IMPORTANT:** Before deploying, update the base path in `vite.config.ts` to match your GitHub repository name.

Open `vite.config.ts` and change this line:
```typescript
base: mode === 'production' ? '/APECS/' : '/',
```

Replace `/APECS/` with `/YOUR-REPO-NAME/`

For example:
- If your repo is `apecs-2026`, use `/apecs-2026/`
- If your repo is `conference`, use `/conference/`
- **Keep the forward slashes!**

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **"+"** → **"New repository"**
3. **Name:** Choose a name (e.g., `APECS`, `apecs-2026`)
4. **Visibility:** Must be **Public** (for free GitHub Pages)
5. **Don't** check any initialization options
6. Click **"Create repository"**

### Step 3: Upload Your Code

#### Option A: Using GitHub Desktop (Recommended for Beginners)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click **File** → **Add Local Repository**
4. Browse to your APECS folder
5. If prompted "This directory does not appear to be a Git repository":
   - Click **"Create a Repository"**
   - Click **"Create Repository"**
6. In the bottom left:
   - **Summary:** Type "Initial commit"
   - Click **"Commit to main"**
7. Click **"Publish repository"** at the top
8. **Uncheck** "Keep this code private"
9. Click **"Publish Repository"**

#### Option B: Using Command Line

```bash
# Navigate to your APECS folder
cd /path/to/APECS

# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit"

# Add your GitHub repository (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu bar)
3. Click **Pages** (left sidebar under "Code and automation")
4. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
5. That's it! No need to save anything.

### Step 5: Wait for Deployment

1. Click the **Actions** tab (top menu bar)
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait 2-3 minutes for it to complete
4. Once it shows a green checkmark ✅, your site is live!

### Step 6: View Your Live Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example:
- Username: `johndoe`
- Repo: `APECS`
- URL: `https://johndoe.github.io/APECS/`

---

## 🔄 Updating Your Site

### Using GitHub Desktop:

1. Make changes to your files locally
2. Open GitHub Desktop
3. You'll see your changes listed
4. Add a description in **"Summary"** (e.g., "Update speakers")
5. Click **"Commit to main"**
6. Click **"Push origin"** at the top
7. GitHub will automatically rebuild and deploy (2-3 minutes)

### Using Command Line:

```bash
# After making changes
git add .
git commit -m "Description of your changes"
git push
```

---

## 🐛 Troubleshooting

### Site shows blank page or 404s

**Solution:** Check that the `base` path in `vite.config.ts` matches your repository name exactly.

```typescript
// If your repo is called "apecs-conference"
base: mode === 'production' ? '/apecs-conference/' : '/',
```

### Build fails in GitHub Actions

**Solution:** Check the Actions tab for error details. Common issues:
- Missing dependencies → Fixed automatically by `npm ci`
- TypeScript errors → Fix locally first
- Build errors → Run `npm run build` locally to test

### Links don't work after deployment

**Solution:** Make sure you're using relative links in your code:
- ✅ Good: `/accommodations`
- ❌ Bad: `https://mysite.com/accommodations`

The base path in `vite.config.ts` handles this automatically.

---

## 🎨 Custom Domain (Optional)

Want to use your own domain like `apecs2026.com`?

### Step 1: Buy a Domain
Purchase from any domain registrar:
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://godaddy.com)

### Step 2: Configure DNS

In your domain registrar's DNS settings, add these records:

**For apex domain (apecs2026.com):**
```
Type: A
Host: @
Value: 185.199.108.153
```
```
Type: A
Host: @
Value: 185.199.109.153
```
```
Type: A
Host: @
Value: 185.199.110.153
```
```
Type: A
Host: @
Value: 185.199.111.153
```

**For www subdomain (www.apecs2026.com):**
```
Type: CNAME
Host: www
Value: YOUR-USERNAME.github.io
```

### Step 3: Configure GitHub

1. Go to your repository → **Settings** → **Pages**
2. Under **Custom domain**, enter your domain: `apecs2026.com`
3. Click **Save**
4. Check **Enforce HTTPS** (may take a few minutes to become available)

### Step 4: Update vite.config.ts

Change the base path to root:
```typescript
base: mode === 'production' ? '/' : '/',
```

### Step 5: Wait for DNS

DNS propagation can take 24-48 hours. Check status at [whatsmydns.net](https://www.whatsmydns.net/)

---

## 📊 Monitoring Your Site

### View Deployment History
1. Go to **Actions** tab
2. See all past deployments and their status

### View Traffic
1. Go to **Insights** tab
2. Click **Traffic** to see visitor stats

### Check Build Logs
1. Go to **Actions** tab
2. Click any workflow run
3. Click **build** or **deploy** to see detailed logs

---

## ⚡ Pro Tips

1. **Test locally first:** Always run `npm run build` and `npm run preview` before pushing
2. **Use branches:** Create a `dev` branch for testing changes before deploying to `main`
3. **Enable notifications:** Get email alerts when deployments fail
4. **Check mobile:** GitHub Pages works great on mobile - test your site!
5. **Analytics:** Add Google Analytics to track visitors (optional)

---

## 📝 Quick Reference

### Important URLs to Bookmark
- Your repository: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`
- Your live site: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- Actions (deployments): `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/actions`

### Important Commands
```bash
# Build locally to test
npm run build

# Preview production build locally
npm run preview

# Push changes
git add .
git commit -m "Update message"
git push
```

### Files You Should Never Modify
- `.github/workflows/deploy.yml` - Deployment automation
- `public/404.html` - Routing helper
- The redirect script in `index.html` - Routing helper

### Files You WILL Need to Modify
- `vite.config.ts` - Update base path to match your repo name

---

## 🆘 Need Help?

- **GitHub Docs:** [pages.github.com](https://pages.github.com)
- **Vite Docs:** [vitejs.dev/guide/static-deploy](https://vitejs.dev/guide/static-deploy.html)
- **Issues?** Create an issue in your GitHub repository

---

## ✅ Checklist

Before deploying, make sure you've:

- [ ] Updated `base` path in `vite.config.ts` to match your repo name
- [ ] Created a GitHub repository (must be public)
- [ ] Pushed your code to GitHub
- [ ] Enabled GitHub Pages with "GitHub Actions" as source
- [ ] Waited for the first deployment to complete
- [ ] Tested your live site URL
- [ ] Verified all pages load correctly
- [ ] Checked that navigation works

---

**Your site will be live at:** `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

🎉 **Happy deploying!**
