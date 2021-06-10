import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data }: { data: GatsbyTypes.MDXBlogPageQuery }) => {
  if (!data.mdx) {
    throw new Error(`No content found for page.`)
  }

  return (
    <>
      <Helmet>
        <title>
          {data.mdx?.frontmatter?.title} - {data.mdx?.frontmatter?.author}
        </title>
      </Helmet>
      <div className="wrapper">
        <main>
          <h1>{data.mdx?.frontmatter?.title}</h1>
          <MDXRenderer>{data.mdx?.body}</MDXRenderer>
        </main>
      </div>
    </>
  )
}

export const query = graphql`
  query MDXBlogPage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`
