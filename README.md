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

## TODO

1. set up mailchimp forms ✅
2. set up build ✅
3. set up email links instead of other forms ✅
4. fix favicon: ✅
5. sponsor wall ✅
6. have rough crack at landing page/calls to action ✅
7. get layout/colours/content ok secondary pages ⬜
8. test manual deploy on subdirectory ⬜
9. set action/CD for deploy to subdirectory ⬜
10. add force build/deploy manual action ⬜
11. fix readme ⬜
12. fix up landing page design and content ⬜
13. fix up memberships content ⬜
14. fix up squash content ⬜
15. fix up hire content ⬜
16. fix up contact us content ⬜
17. fix up tennis content ⬜
18. polish ⬜
