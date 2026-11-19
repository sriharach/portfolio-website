# Sriharach Portfolio

Personal portfolio built with Next.js, Tailwind CSS 4, and daisyUI 5. The site supports English and Thai and exports as static HTML for hosting under `/portfolio`.

## Routes

- English: `/portfolio/`
- Thai: `/portfolio/th/`

## Development

```bash
yarn install
yarn dev
yarn lint
yarn test
```

## Static Export

```bash
yarn build
```

Next.js writes the static site to `out/`. Publish the contents at the `/portfolio` path of the target host; no Next.js runtime server is required. The exported site uses the existing image, project, font, and CV files from `public/`.

The contact form uses EmailJS in the browser. Set these values in the build environment:

- `SERVICE_ID`
- `TEMPLATE_ID`
- `PUBLIC_KEY`

Project and social links are also supplied at build time:

- `WISDOM_DOMAIN`
- `WISDOM_MANAGEMENT_DOMAIN`
- `IMAGE_CONVERTER_DOMAIN`
- `OPEN_API_DOMAIN`
- `URL_LINKEDIN`
- `URL_GITHUB`

EmailJS credentials used by a static client are public; use only the EmailJS public key and configure domain restrictions in the EmailJS account.

## Tests

`yarn test` runs Vitest with jsdom. The test configuration includes only hook tests under `src/hooks`.
