# cexufu.github.io

Personal website and blog of Cexu (Tony) Fu, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll template.

- Blog posts: `_posts/`
- About page: `_pages/about.md`
- CV data: `_data/cv.yml`
- Publications: `_bibliography/papers.bib`
- News items: `_news/`

The site is built and deployed by `.github/workflows/deploy.yml` on every push to `main`; the built site is published from the `gh-pages` branch.

Local preview with Docker: `docker compose up`, then open http://localhost:8080.
