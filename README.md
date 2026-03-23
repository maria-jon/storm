# Storm portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/1bc0ff47-6f65-4ca8-882b-8bddae2d6ef4/deploy-status)](https://app.netlify.com/projects/teal-gumption-d45e30/deploys)

- Astro
- GitHub Actions
- Netflify
- OAuth
- Decap CMS

## 🚀 Project Structure


```text
├── public/
│   ├── uploads/
│   │   └── artworks/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── about/
│   │   └── portfolio/
│   ├── layouts/
│   └── pages/
│       ├── home/
│       ├── available pieces/
│       ├── about/
│       ├── portfolio/
│       └── contact/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```


`src/content/about` is the markdown content collection for sections in the about-page.

`src/content/portfolio` is the markdown content collection for artworks.

Both content collections are type-checked by the zod schemas found in `src/content.config.ts`. They are rendered using `getCollection()`. Uploaded assets can be found in `public/uploads`.

`src/pages/portfolio/` is used to generate routing for single artwork pages.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Credit

- [Facebook icon](https://icons8.com/icon/118490/facebook) by [Icons8](https://icons8.com)
- [Instagram icon](https://icons8.com/icon/84884/instagram) by [Icons8](https://icons8.com)
- [Mail icon](https://icons8.com/icon/YRRhCXfA0Vd0/mail) by [Icons8](https://icons8.com)
