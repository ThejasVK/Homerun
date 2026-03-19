# Thejas Portfolio

A responsive, static portfolio site with a classy/funky urban visual style, animated narrative text, and a unique randomized opening each time the page loads.

## Stack

- HTML
- CSS
- Vanilla JavaScript

## Run Locally

Open `index.html` in your browser.

## Customize Content Quickly

- Main content and links: `index.html`
- Theme and layout: `styles.css`
- Rotating intro text, narrative typing, random variants/images: `script.js`

## Add Your Own Images

Replace image URLs in:

- Hero image pool: `script.js` (`heroImages` array)
- Gallery images: `index.html` (`.gallery-grid` section)

## GitHub Pages (Free Hosting)

1. Push this folder to a GitHub repository.
2. Open repository **Settings** > **Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` (or `master`) and `/ (root)`
4. Save and wait 1-2 minutes.
5. Your site will be live at: `https://<your-username>.github.io/<repo-name>/`

## Resume Link (No Cost)

Pick one of these free options:

1. Google Drive
   - Upload your PDF resume to Drive.
   - Set sharing to "Anyone with the link" (Viewer).
   - Use that public link in `index.html` for the resume button.
2. GitHub Repository
   - Add resume PDF in your repo (for example `assets/Thejas_Resume.pdf`).
   - Link it directly from `index.html`.
3. LinkedIn Featured Section
   - Upload resume/media in LinkedIn Featured and use that URL.

## Notes

- External images are pulled from Unsplash URLs.
- A local image placeholder folder is ready at `assets/images/`.
- To avoid dependency on external image hosts, use local files under `assets/`.
