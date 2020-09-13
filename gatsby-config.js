module.exports = {
  siteMetadata: {
    title: `Dallas Opelt`,
    description: `Full stack web developer located in the greater Seattle area.`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-148160867-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    },
    // `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dallas Opelt`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        short_name: `Dallas Opelt`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: `/`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        background_color: `#44475a`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: `#8be9fd`,
        icon: "./src/img/favicon.png",
        display: `minimal-ui`,
        orientation: "portrait-primary"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
