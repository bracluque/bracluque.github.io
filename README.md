# Deploy to GitHub Pages

These four HTML files + `styles.css` are static — no React, no build step. Drop them into your `bracluque/bracluque.github.io` repo and push.

## Files in this folder
- `index.html` — Home
- `research.html` — Research
- `personal.html` — Personal (gallery)
- `personal-ipa.html`, `personal-argentina.html`, `personal-egap-montevideo.html`, `personal-pea.html`, `personal-egap-regional.html`, `personal-lacea.html`, `personal-wyss.html` — 7 Personal sub-pages
- `cv.html` — CV
- `styles.css` — shared styles (UBC palette, Source Serif)

The narrative paragraphs in each `personal-*.html` are placeholder copy (matching the structure of the existing live pages). Edit them in place with your own writing. The image grid references `images/<slug>/1.jpg`, `2.jpg`, etc. — drop real photos there or leave the placeholders.

## Steps

1. **Clone the repo locally** (if you don't have it already):
   ```sh
   git clone https://github.com/bracluque/bracluque.github.io.git
   cd bracluque.github.io
   ```

2. **Back up the current site** (just in case):
   ```sh
   git checkout -b backup-old-site
   git checkout main   # or master
   ```

3. **Replace the old files** with the new ones from this `deploy/` folder. Keep:
   - `images/profile.jpg` — your portrait (referenced from home)
   - `images/LR_image.png` — Land Reform paper figure (referenced from research)
   - `docs/CV_Condori_Brayan.pdf` — your CV (referenced from cv.html)

   Delete: `resources.html` (and any other old pages no longer linked).

4. **Commit and push**:
   ```sh
   git add .
   git commit -m "Redesign: UBC palette, four-page static site"
   git push origin main
   ```

5. Live at **https://bracluque.github.io** within ~1 minute.

## Things to double-check before pushing

- **Social links** in every footer point to `bracluque` accounts — confirm or fix the handles in each HTML file's `<footer>`.
- **CV filename**: I assumed `docs/CV_Condori_Brayan.pdf`. Rename or update the path in `cv.html` if different.
- **Photos for Personal page**: currently hatched placeholders with category tags. To swap in real photos, drop them into `images/personal/` and replace each `.gthumb` block. Example:
  ```html
  <div class="gthumb"><span class="tag">IPA</span>
    <img src="images/personal/ipa.jpg" alt="" />
  </div>
  ```
- **Land Reform thumbnail**: links to `images/LR_image.png` (your existing path). Confirm it's still there.

## Local preview before pushing

From the `deploy/` folder:
```sh
python3 -m http.server 8000
```
Open `http://localhost:8000` in your browser. The PDF iframe on `cv.html` only works when served (not via `file://`), so use the local server to test.
