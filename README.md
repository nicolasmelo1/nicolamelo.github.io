# nicolamelo.github.io

Super simple Vite site intended for GitHub Pages using the /docs folder.

## Quick start

1. Install dependencies:
   - `npm install`
2. Build the static site (outputs to `docs/`):
   - `npm run build`
3. Commit the build output:
   - `git add docs`
   - `git commit -m "Build site"`
4. Push to GitHub:
   - `git push`

## Enable GitHub Pages (Quickstart)

In GitHub:

1. Go to **Settings** → **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **Branch: main** and **Folder: /docs**.
4. Save.

Your site will be available at `https://nicolamelo.github.io/` after GitHub finishes building.

## Static file example

The file `public/hello.txt` is copied to the build output and will be served at:

- `https://nicolamelo.github.io/hello.txt`

If you add more files under `public/`, they will be served at the site root after `npm run build`.
