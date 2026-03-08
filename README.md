# Tech Made Easy

This repository is the source for the "Tech Made Easy" website — presentation notes and resources for a series of community talks.

The site is built with [Docusaurus](https://docusaurus.io/).

## Installation

Install dependencies with either `yarn` or `npm`.

```bash
yarn
# or
npm install
```

## Local Development

Start a local development server:

```bash
yarn start
# or
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

Build the static site for production:

```bash
yarn build
# or
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Deploy to GitHub Pages (example):

```bash
USE_SSH=true yarn deploy
# or
GIT_USER=<Your GitHub username> yarn deploy
```

Adjust deployment settings to match your hosting provider.
