import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ data }: { data: GatsbyTypes.BlogPageQuery }) => {
  return (
    <>
      <Helmet>
        <title>
          {data.markdownRemark?.frontmatter?.title} -{" "}
          {data.markdownRemark?.frontmatter?.author}
        </title>
      </Helmet>
      <div className="wrapper">
        <main>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark?.html ?? "",
            }}
          />
        </main>
      </div>
    </>
  )
}

export const query = graphql`
  query BlogPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        author
      }
      html
    }
  }
`
