# Thorndon club website

[![Master](https://github.com/JaronSteenson/thorndon-club/actions/workflows/action.yml/badge.svg?branch=master)](https://github.com/JaronSteenson/thorndon-club/actions/workflows/action.yml)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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
