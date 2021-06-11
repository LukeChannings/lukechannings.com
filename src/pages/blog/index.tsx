import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SEO from "../../components/seo"

export default () => {
  const blogItems = useStaticQuery<GatsbyTypes.BlogListQuery>(graphql`
    query BlogList {
      allMdx(sort: { fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              author
              category
              date
              tags
              title
            }
            slug
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Blog" description="Blog listing" />
      <h1>Blog</h1>
      {blogItems.allMdx.edges.map(node => {})}
    </>
  )
}
