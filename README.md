# Website

This is [my portfolio](https://viktor-t.com/)

### Installation

```
$ yarn
```

### Local Development

```
$ nvm use v22
$ npm run dev
```

### Build

```
$ nvm use v22
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ nvm use v22
$ ./deploy.sh
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
