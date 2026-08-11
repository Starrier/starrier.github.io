# Starrier's Blog

[![Deploy Hexo](https://github.com/Starrier/starrier.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Starrier/starrier.github.io/actions/workflows/deploy.yml)

## Publish workflow

Write on a **feature/dev branch**; Actions only runs when those changes are **merged into `master`**.

```bash
git checkout -b article/my-post
npx hexo new "文章标题"
# edit source/_posts/...
git add -A && git commit -m "add: 文章标题"
git push -u origin HEAD
# open PR → merge into master → one Actions deploy
```

- Pushing to feature/dev branches does **not** trigger deploy (saves free Actions minutes).
- Merging into `master` triggers one build and deploys to `gh-pages`.
- Manual run: Actions → Deploy Hexo → Run workflow.

## Local

```bash
npm install
npx hexo server   # http://localhost:4000
npm run build     # hexo clean && hexo g && gulp
```
