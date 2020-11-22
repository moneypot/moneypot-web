module.exports = {
  siteMetadata: {
      title: "moneypot",
      description: "moneypot, a bitcoin scaling solution",
      url: "https://www.moneypot.com", // No trailing slash allowed!
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
      `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
          background_color: "#fff",
          theme_color: "#3D91F9",
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: "standalone",
          icon: "src/images/icon.png", // TODO: not perfect.
          // This path is relative to the root of the site.
          // An optional attribute which provides support for CORS check.
          // If you do not provide a crossOrigin option, it will skip CORS for manifest.
          // Any invalid keyword or empty string defaults to `anonymous`
          crossOrigin: `use-credentials`,
      },

    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
      `gatsby-plugin-sass`,



  ],
}
