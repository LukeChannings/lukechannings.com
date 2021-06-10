module.exports = {
  siteMetadata: {
    title: `Luke Channings is a developer.`,
    titleTemplate: `%s · Luke Channings`,
    description: "Luke Channings is a developer.",
    author: `Luke Channings`,
    siteUrl: `https://lukechannings.com/`,
    twitterUsername: "@LukeChannings",
    image: "avatar.jpeg",
  },
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs/`,
        ignore: process.env.BUILD_DRAFTS ? [] : ["**/_*"],
      },
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: ".cache/types/gatsby-types.d.ts",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
                edges {
                  node {
                    excerpt
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                    html
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Luke Channings",
            match: "^/blog/",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
