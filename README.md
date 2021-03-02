This project uses React, GatsbyJS and Styled Components.

## Commands

### Development

Clear cache and start development:

```bash
yarn start
```

Format whole project using prettier:

```bash
yarn format
```

Clean Gatsbys cache:

```bash
yarn clean
```

### Deployment

Build and serve production package:

```bash
yarn serve
```

Deploy on GH Pages on this repo route:

```bash
yarn deploy:repo-route
```

Deploy on GH Pages on user main route:

1. Clone `{{username}}.github.io` repository
2. Pull projects latest version from this repo (e. g. `git pull https://github.com/woznyjakub/portfolio master`)
3. Run deploy command:

```bash
yarn deploy:main-route
```

This project was bootstraped with Gatsby Default Starter.
