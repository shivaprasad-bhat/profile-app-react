# Shivaprasad Bhat's Profile

A responsive React and Vite profile site.

## Local development

```sh
npm install
npm run dev
```

## Production

```sh
npm run check
npm run preview
```

The deployable output is generated in `dist/`.

## Netlify deployment

The repository includes `netlify.toml` with Netlify build settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

Deploy by importing this repository in Netlify. The included redirect rule preserves client-side routes.