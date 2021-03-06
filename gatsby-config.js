const buildDrafts = !!process.env.BUILD_DRAFTS
const previewDomain = process.env.CFP_PREVIEW_DOMAIN

const siteUrl = previewDomain
  ? `https://${process.env.GIT_BRANCH_NAME.slice(0, 28)}.${previewDomain}`
  : `https://lukechannings.com/`

module.exports = {
  siteMetadata: {
    title: `Luke Channings is a developer.`,
    titleTemplate: `%s · Luke Channings`,
    description: "The website and blog of Luke Channings",
    author: `Luke Channings`,
    siteUrl,
    twitterUsername: "@LukeChannings",
    image: "blog-image-default.jpeg",
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
        ignore: buildDrafts ? [] : ["**/_*"],
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
