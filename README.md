# Varun Kumar — Developer Portfolio

A modern, high-performance developer portfolio built to showcase experience, projects, and technical skills. Designed with a premium minimalist aesthetic, dynamic glassmorphism effects, and fully responsive layouts.

Live Site: [imnurav.github.io](https://imnurav.github.io)

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/) (Recommended)

## ✨ Features

- **Modern UI/UX:** Built with sleek glassmorphism, gradient text, and dynamic hover effects.
- **Dark/Light Mode:** Fully integrated theme toggling using `next-themes`.
- **Command Palette:** Quick navigation menu accessible via `⌘K` or `Ctrl+K`.
- **Responsive Design:** Optimized for mobile, tablet, and desktop screens.
- **SEO Optimized:** Metadata, OpenGraph tags, and semantic HTML implemented out of the box.

## 🛠️ Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/imnurav/portfolio.git
cd portfolio
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable UI components (Navbar, Hero, Experience, Projects, etc.)
- `/src/lib/data` - Local data files for portfolio content (aboutData, experienceData, projectsData, etc.)
- `/public` - Static assets like images and favicons

## 📝 Customization

All portfolio data (experience, projects, skills, etc.) is abstracted into the `/src/lib/data` directory. To update the content of the website, simply modify the corresponding TypeScript files in that folder.

Global constants like social links and site metadata can be updated in `/src/lib/constants.ts`.

## 📄 Changing Resume URL via GitHub Actions (Zero Setup / Zero Tokens)

The portfolio resume URL is stored in `src/lib/data/resume.json`. You can update it anytime **directly from GitHub** without editing any code locally or creating personal access tokens:

### Option A: From GitHub Website (1-Click)
1. Go to your repository on GitHub: **`imnurav/imnurav.github.io`**
2. Click the **Actions** tab.
3. In the left sidebar, click **"Deploy Next.js site to Pages"**.
4. Click **"Run workflow"** on the right.
5. Paste your new **Resume URL** into the input box and click the green **"Run workflow"** button.

GitHub Actions will automatically:
- Update `src/lib/data/resume.json`
- Commit and push the change to `main` via `github-actions[bot]`
- Rebuild and redeploy your live site to GitHub Pages!

### Option B: Local CLI
If you are developing locally, you can also update the local file directly:
```bash
yarn resume:update "https://drive.google.com/file/d/your-new-resume-id/view"
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

