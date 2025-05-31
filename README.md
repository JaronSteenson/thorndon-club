# Thorndon club website

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

## Jaron's random .bashrc snippets

```shell
guake-thorndon() {
  guake -r thorndon-club && cd ~/code/thorndon-club/ && nvm use 21.6.1 && npm run dev;
}

thorndon-test-site-deploy() {
  DEPLOYED_COMMIT="$(git log --pretty=format:'%h' -n 1)";
  GIT_HUB_PAGES_REPO="jaronsteenson.github.io";
  npm run prod && rm -rf ../$GIT_HUB_PAGES_REPO/* && cp -r out/. ../$GIT_HUB_PAGES_REPO && (cd ../$GIT_HUB_PAGES_REPO && git add -A && git commit -m "Deploy test site: $DEPLOYED_COMMIT" && git push);
}
```
