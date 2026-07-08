# Standalone Storybook

This folder is a self-contained Storybook app for the shared UI components.

## What to copy into a new repo

Copy the whole `storybook-separate/` folder, or use this minimal structure:

```text
storybook-separate/
  package.json
  index.html
  vite.config.js
  postcss.config.cjs
  tailwind.config.cjs
  .gitignore
  .storybook/
    main.js
    preview.js
    preview.css
    preview-head.html
  src/
    lib/
      utils.js
    styles/
      tailwind.css
    components/
      ui/
        badge.jsx
        badge.stories.jsx
        button.jsx
        button.stories.jsx
        card.jsx
        card.stories.jsx
        input.jsx
        separator.jsx
        table.jsx
        table.stories.jsx
```

## Run locally

```bash
npm install
npm run storybook
```

## Build for deploy

```bash
npm run build-storybook
```

The output will be in `storybook-static/`.

## Deploy on AWS Amplify

Use these settings if you configure the app manually in Amplify:

- Build Command: `npm run build-storybook`
- Output Directory: `storybook-static`

This repo also includes [`amplify.yml`](./amplify.yml), so Amplify can pick up the build settings automatically when you push to GitHub.

## Font

The Storybook preview already loads the same `Geist` font used in the main app, so the typography should match closely.
