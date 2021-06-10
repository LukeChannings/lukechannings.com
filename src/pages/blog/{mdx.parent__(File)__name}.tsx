import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../../components/seo"

export default ({ data }: { data: GatsbyTypes.MDXBlogPageQuery }) => {
  if (!data.mdx) {
    throw new Error(`No content found for page.`)
  }

  return (
    <>
      <SEO
        title={data.mdx?.frontmatter?.title ?? ""}
        description=""
        image=""
        article
      />
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
