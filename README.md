# Thejas Portfolio

Personal portfolio website built with HTML, CSS, and vanilla JavaScript.

Live site: https://thejasvk.github.io/Homerun/

## Features

- Hero section with one-time typed name animation and blinking cursor.
- Scroll-reveal animations for sections and cards.
- Terminal-style About block.
- Story-driven About paragraph plus Skills and Certifications cards.
- Expand/collapse Work Experience timeline (chronological ladder).
- Education cards.
- Dynamic project cards rendered from JavaScript data.
- Responsive design for mobile, tablet, and desktop.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

- `index.html`: Page structure and content sections.
- `styles.css`: Theme, layout, responsive styles, animations.
- `script.js`: Typed name effect, terminal output, timeline/projects render logic, scroll interactions.
- `assets/images/`: Local image placeholder folder.

## Run Locally

Option 1:

- Open `index.html` directly in your browser.

Option 2 (recommended):

```bash
python3 -m http.server 8100
```

Then visit: `http://localhost:8100`

## Deploy with GitHub Pages

1. Push code to the `main` branch.
2. Go to repository `Settings` > `Pages`.
3. Under `Build and deployment`:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. Save changes.
5. GitHub will publish automatically after each push.

## Update Workflow

Any new commit pushed to `main` will automatically update the live site after deployment completes.

```bash
git add .
git commit -m "Your update message"
git push origin main
```

## Contact

- Email: vkthejas01@gmail.com
- LinkedIn: https://linkedin.com/in/thejasvk
- GitHub: https://github.com/ThejasVK
