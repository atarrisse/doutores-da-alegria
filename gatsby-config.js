module.exports = {
  siteMetadata: {
    title: "Balanço 2020 | Doutores da Alegria",
    description: "Lorem Ipsum",
    author: "Doutores da Alegria",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
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
        // background_color: "#663399",
        // theme_color: "#663399",
        // display: "minimal-ui",
        icon: "src/images/favicon.ico", // This path is relative to the root of the site.
      },
    },
  ],
}
