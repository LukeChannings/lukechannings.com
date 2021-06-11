import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SEO from "../../components/seo"
import { dateFormatter } from "../../util"

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
      <SEO title="Blog listing" description="Blog listing" />
      <h1>Blog listing</h1>
      <ul>
        {blogItems.allMdx.edges.map(({ node }) => {
          return (
            <li key={node.slug}>
              <a href={`/blog/${node.slug}`}>
                {dateFormatter(node.frontmatter?.date)} ·{" "}
                {node.frontmatter?.title}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
