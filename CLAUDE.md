# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## About This Site

This is **Woocheol Shin's personal academic homepage** — a customized fork of the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Live at https://Shin-woocheol.github.io. The upstream theme docs (README.md, CUSTOMIZE.md, INSTALL.md, FAQ.md, TROUBLESHOOTING.md) describe the generic theme; everything in this CLAUDE.md is about *this specific site*.

Recent direction (see `git log`): adopted Kelly He-style venue badges + news block + navbar; author-name fixes in publications; Google Analytics enabled.

## Commands

Local dev runs in Docker (no local Ruby/Node required for serving):

```bash
docker compose pull && docker compose up     # serve at http://localhost:8080
docker compose up --build                    # rebuild after Dockerfile/Gemfile changes
docker compose down                          # stop and free port 8080
```

Before any commit that touches `*.md`, `*.liquid`, `*.yml`, `*.scss`, or `*.js`, **Prettier is mandatory** — the `prettier.yml` GitHub workflow will fail the PR otherwise:

```bash
npx prettier . --write
```

`deploy.yml` runs Jekyll with `JEKYLL_ENV=production` and commits the built site to `gh-pages`. Deploys trigger on changes to site files (not pure docs).

## Architecture — Where Content Lives

The site is almost entirely data-driven. Code changes are rare; **most edits are content in YAML/Markdown/BibTeX**:

| What you want to edit | Where to edit |
| --- | --- |
| Name, title, avatar, feature flags, analytics | `_config.yml` (single source of truth) |
| About page copy | `_pages/about.md` |
| Publications list | `_bibliography/papers.bib` (BibTeX with al-folio custom fields like `pdf`, `code`, `preview`) |
| Publication citation counts | `_data/citations.yml` (auto-updated by `update-citations.yml` workflow) |
| News/announcements on home page | `_news/announcement_*.md` |
| Social links (email, GitHub, Google Scholar, etc.) | `_data/socials.yml` |
| CV content | `_data/cv.yml` (YAML format) — also see `render-cv.yml` workflow |
| Co-author linking in bibliography | `_data/coauthors.yml` |
| Venue name → abbreviation/color mapping (for badges) | `_data/venues.yml` |
| GitHub repos shown on `/repositories/` | `_data/repositories.yml` |
| Navbar entries, per-page visibility | frontmatter `nav: true`/`nav_order:` in `_pages/*.md` |
| Teaching entries | `_teachings/` |
| Projects | `_projects/` |
| Layouts / Liquid templates | `_layouts/`, `_includes/` (Liquid — see `.github/instructions/liquid-templates.instructions.md`) |
| Styles | `_sass/` (SCSS) |

When editing, consult the matching file in `.github/instructions/` for conventions (markdown content, YAML, BibTeX, Liquid, JS — all enforced by this repo).

## Site Config Gotcha

This is a **personal site** (`username.github.io`), so in `_config.yml`:

- `url: https://Shin-woocheol.github.io`
- `baseurl:` **must stay empty**

Do not add a `baseurl` value — it will break all CSS/JS/image paths. (Only project sites at `username.github.io/repo-name/` use `baseurl`.)

When quoting strings in `_config.yml` that contain `:`, `&`, or `#`, wrap in double quotes or the YAML parser fails.

## Commit Style

Follow `.github/GIT_WORKFLOW.md`: `<type>: <subject>` with types `feat|fix|docs|style|config|chore`. Stage files explicitly — never `git add .`. The `_site/`, `.jekyll-cache/`, `vendor/`, `node_modules/` directories are gitignored; don't commit built output.
