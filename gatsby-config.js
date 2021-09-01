module.exports = {
  siteMetadata: {
    title: "Balanço 2020 | Doutores da Alegria",
    description: "Lorem Ipsum",
    author: "Doutores da Alegria",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    // 'gatsby-plugin-svgr',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Balanço 2020 | Doutores da Alegria",
        short_name: "Balanço 2020",
        start_url: "/",
        icons: [
          {
            src: `./static/favicon-16x16`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `./static/favicon-32x32`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `./static/favicon-144x144`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `./static/favicon-180x180`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/data`,
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/static/icons`
        }
      }
    }
  ],
};
