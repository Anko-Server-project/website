module.exports = {
  siteMetadata: {
    siteTitle: `あんこ鯖公式ホームページ`,
    defaultTitle: `甘くてのんびりとした生活を送ろう。`,
    siteTitleShort: `あんこ`,
    siteDescription: `あんこ鯖はMinecraftPE/BEで遊べる生活/経済サーバーです。`,
    siteUrl: `https://ankoserver.netlify.app/`,
    siteAuthor: `@Anko-Serverk`,
    siteImage: `/sexy-banner.png`,
    siteLanguage: `ja`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/Anko-Server-project/website`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `あんこ鯖公式ホームページ`,
        short_name: `あんこ鯖`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ankoserver.netlify.app/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
