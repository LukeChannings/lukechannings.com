module.exports = {
  siteMetadata: {
    title: `Luke Channings is a developer.`,
    author: `@LukeChannings`,
  },
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs`,
      },
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: ".cache/types/gatsby-types.d.ts",
      },
    },
  ],
}
