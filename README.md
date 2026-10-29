# John Dutch Portfolio

A modern personal portfolio and business website built with Astro. It showcases services, projects, experience, education, and contact details for a full-stack developer and IT trainer based in Arusha, Tanzania.

## Overview

This site is designed to:

- present professional services clearly
- highlight key projects and work experience
- communicate technical capabilities and training experience
- make it easy for clients to contact the owner
- build quickly as a static site for deployment on platforms like Vercel

## Live Demo

- Production site: https://my-ui-design.vercel.app/
- GitHub repository: https://github.com/dutchjohn80-rgb/my-ui-design

## Tech Stack

- Astro
- HTML, CSS, and JavaScript
- Vite
- GitHub for version control

## Project Structure

```text
my-astro-site/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   └── pages/
├── package.json
├── package-lock.json
├── README.md
└── public/   (if added later)
```

## Main Content Files

- `src/data/site.ts` – profile, services, projects, experience, education, and contact data
- `src/pages/index.astro` – homepage
- `src/pages/about.astro` – about page
- `src/pages/services.astro` – services page
- `src/pages/projects.astro` – projects page
- `src/pages/experience.astro` – experience and skills page
- `src/pages/contact.astro` – contact page
- `src/layouts/Layout.astro` – global layout and theme styling

## Prerequisites

Make sure you have the following installed:

- Node.js 18+ recommended
- npm

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev -- --host 0.0.0.0
```

Then open:

```text
http://localhost:4321
```

## Production Build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview -- --host 0.0.0.0
```

## Deployment

This project is a static Astro site and can be deployed to platforms such as:

- Vercel
- Netlify
- GitHub Pages

### Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Keep the default Astro settings.
4. Deploy the project.

## Customization

Edit the content in `src/data/site.ts` to update:

- name and role
- email and GitHub link
- services
- project summaries
- education and work history
- skills and process steps

You can also update page text in the Astro files under `src/pages/` and adjust the visual styling in `src/layouts/Layout.astro`.

## License

This project is for personal portfolio use. Add a license here if you plan to publish it publicly under a specific legal license.

## Author

John Dutch
