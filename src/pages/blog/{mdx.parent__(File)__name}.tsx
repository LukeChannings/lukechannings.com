import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../../components/seo"
import { dateFormatter } from "../../util"

export default ({ data }: { data: GatsbyTypes.MDXBlogPageQuery }) => {
  if (!data.mdx) {
    throw new Error(`No content found for page.`)
  }

  return (
    <>
      <SEO
        title={data.mdx?.frontmatter?.title ?? "！NO TITLE！"}
        image={data.mdx?.frontmatter?.image}
        description="Luke Channings's blog"
        article
      />
      <div className="wrapper">
        <article itemScope itemType="http://schema.org/BlogPosting">
          <h1 itemProp="name">{data.mdx?.frontmatter?.title}</h1>
          <p>
            Written by{" "}
            <a href={data.site?.siteMetadata?.siteUrl}>
              {data.mdx?.frontmatter?.author}
            </a>{" "}
            on {dateFormatter(data.mdx?.frontmatter?.date!)}
          </p>
          <MDXRenderer>{data.mdx?.body}</MDXRenderer>
        </article>
      </div>
    </>
  )
}

export const query = graphql`
  query MDXBlogPage($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        date
        category
        image
      }
      body
    }
  }
`
