# Balanço 2020 | Doutores da Alegria

The **Balanço 2020** is the first digital edition of the [Doutores da Alegria NGO](https://doutoresdaalegria.org.br/) annual report. It reckons all the activities organised and their impact.

## 💻 Running

### Developing

```sh
    yarn
    yarv dev
```

### Build

```sh
    yarn build
```

### Deploy

Integrated with Vercel

## 📚 Stack

- [Yarn](https://yarnpkg.com/)
- [Gatsby](https://www.gatsbyjs.org)
- [Sass](https://sass-lang.com)

Due to the limited timeframe, this project won't abstain itself of using dependencies.

|                                                  Dependency                                                  | Description                    |
| :----------------------------------------------------------------------------------------------------------: | :----------------------------- |
|       [gatsby-plugin-sass](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass)       | sass funcionalities            |
|      [gatsby-plugin-image](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-image)      | Gatsby image processing plugin |
|      [gatsby-plugin-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp)      | Support for image plugin       |
| [gatsby-transformer-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-sharp) | Support for image plugin       |
|   [gatsby-plugin-manifest](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest)   | Manifest                       |

## 💅 Styles

This project uses [Sass](https://sass-lang.com) for styles.

Global styles lives under `./src/styles`.

Component styles should be stores within the component folder and must follow the [CSS modules pattern](https://www.gatsbyjs.org/docs/css-modules/).
