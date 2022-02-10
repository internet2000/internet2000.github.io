[![Ftp deployment](https://github.com/internet2000/internet2000.github.io/actions/workflows/ftp.yml/badge.svg)](https://github.com/internet2000/internet2000.github.io/actions/workflows/ftp.yml)

Here is the source code of the website [internet2000.net](https://internet2000.net), developed by [INTERNET 2000 French agency](https://internet2000.net)

Tools we use

* [11ty static site generator](https://www.11ty.dev/) 
* [Silex website builder](https://www.silex.me)
* [forestry headless CMS](https://forestry.io/)
* [snipcart e-commerce](https://snipcart.com/)
* github pages and github actions
* [Integromat](https://www.integromat.com/) to create a blog post for each instagram post on [internet2000 on instagram](https://www.instagram.com/internet2ooo/)

## local installation

```
$ nvm i
$ npm i
$ npm run build
```

## build and deploy

Useful env vars on the build server

* `URL` optional website URL
* `BASE_URL` optional base url
* `DEPLOY_TOKEN` for deployment to branch `gh-pages`

