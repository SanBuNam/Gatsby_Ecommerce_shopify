module.exports = {
  siteMetadata: {
    title: `Good Daddy Shop`,
    description: `Collection of the best organic baby producs.`,
    author: `@David's Creative Studio, LLC.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "softdavidlee",
        accessToken: "c920597ddc729c0609fc097b3918a577",
        verbose: true,
        paginationSize: 250,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#d9d9d9`,
        theme_color: `#d9d9d9`,
        display: `minimal-ui`,
        icon: `src/images/HeartFace.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
