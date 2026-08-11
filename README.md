# Starrier's Blog

[![Deploy Hexo](https://github.com/Starrier/starrier.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Starrier/starrier.github.io/actions/workflows/deploy.yml)

Push to `master` will build with Hexo and deploy to the `gh-pages` branch (GitHub Pages).

## Local

```bash
npm install
npx hexo server   # http://localhost:4000
npm run build     # hexo clean && hexo g && gulp
```

Manual deploy is usually unnecessary; use GitHub Actions, or run `npm run deploy` locally if needed.
