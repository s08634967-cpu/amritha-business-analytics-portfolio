# Business Analytics Portfolio

React + Vite + Tailwind CSS. Free to host, no backend, and all content lives in **one file**: `src/data/content.js`.

## Run locally
Install Node.js 20+ from nodejs.org, then in this folder:
```
npm install
npm run dev
```
Open the address it prints (usually http://localhost:5173). To test the production build: `npm run build` then `npm run preview`.

## Personalisation checklist

- Your name, email and LinkedIn profile have been filled in from the details available.
- Your professional email is set to amrithapandla755@gmail.com.
- GitHub is left blank until you provide your real profile URL.
- Resume upload is intentionally left ready for a future update; no fake CV is included.
- Add those details before publishing.

## Make it yours (checklist)
1. `src/data/content.js` → `profile`: your name and LinkedIn are prefilled. Add your professional email and GitHub URL when ready.
2. **Update your resume anytime:** place your latest PDF inside `public/` and name it `resume.pdf`. Then open `src/data/content.js` and change `resume: ''` to `resume: '/resume.pdf'`. Save and redeploy. Whenever your resume changes, replace `public/resume.pdf` with the new PDF using the same filename; the website's Resume download links will then serve the updated file. Until a real PDF is added, the download buttons stay hidden and the Contact section says the resume will be added soon.
3. Fill every highlighted `[Add: ...]` placeholder on the site. Search the file for `[Add` to find them all.
4. Paste real URLs into each project's `links` and each certification's `url` (empty links show as placeholders, not buttons).
5. Keep the Nike project honest: label each point as Published fact, My analysis or Assumption.

## Add a new project
Copy any object inside `projects` in `content.js`, give it a new unique `slug`, and fill it in. The card and its case study page appear automatically.

## Publish for free
**Vercel (easiest):** push the folder to a GitHub repo → vercel.com → Add New Project → import the repo → Deploy. Vercel detects Vite automatically. You get a link to put on LinkedIn and your resume.

**GitHub Pages:** push to a repo's `main` branch → Settings → Pages → Source: **GitHub Actions**. The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every push. Your site will be at `https://<username>.github.io/<repo>/`.

Every later update is: edit `content.js`, commit, push. The site redeploys itself.
