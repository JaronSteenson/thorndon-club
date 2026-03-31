# Thorndon club website
## Quick start - Simple website updates (no technical skills required)

Most routine content changes (e.g., pricing updates, contact info, tournament info) are controlled through a single file: **globals.json**. You can edit it directly in your browser here:

👉 **https://github.com/JaronSteenson/thorndon-club/edit/master/app/globals.json**

### How to make changes

1. Make your changes in the editor.
2. Click the **Commit changes...** button in the top right of the screen.
3. Add brief description of what you changed in "Commit message".
4. Click **Commit changes** to save.

After you commit, the website will automatically rebuild and deploy your updates. This usually takes **1–2 minutes**.

> **Important:** Be careful not to remove quotation marks, commas, or braces — these are required for valid JSON. If you're unsure, ask someone on the team before committing.

## About

[![Synthetic home page load](https://github.com/JaronSteenson/thorndon-club/actions/workflows/synthetic-home-page-load.yml/badge.svg)](https://github.com/JaronSteenson/thorndon-club/actions/workflows/synthetic-home-page-load.yml)

[The Thorndon Club website](https://www.thorndonclub.co.nz/) is a simple static site that provides information about the club,
and a googleable entry point to the booking system.

![Home page](./home-page.png)

It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Local dev env setup

### Requirements

-   Node >= 14
-   Npm

### Installation

```bash
npm ci;
```

### Local run

```bash
npm run dev;
```

## Deployment

[![Build and deploy](https://github.com/JaronSteenson/thorndon-club/actions/workflows/build-deploy.yml/badge.svg?branch=master)](https://github.com/JaronSteenson/thorndon-club/actions/workflows/build-deploy.yml)

A GitHub Action is set up to automatically deploy the site to our shared hosting on pushes
to the `master` branch.

This must pass linting and formatting checks before it will deploy.
If you are stuck, you can manually deploy and skip the checks by running the workflow
[manually from the Actions tab in GitHub](https://github.com/JaronSteenson/thorndon-club/actions/workflows/build-deploy.yml).
  npm run prod && rm -rf ../$GIT_HUB_PAGES_REPO/* && cp -r out/. ../$GIT_HUB_PAGES_REPO && (cd ../$GIT_HUB_PAGES_REPO && git add -A && git commit -m "Deploy test site: $DEPLOYED_COMMIT" && git push);
}
```
