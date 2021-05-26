import * as React from "react"
import { graphql } from "gatsby"

export default ({ data }: { data: GatsbyTypes.BlogPageQuery }) => {
  return (
    <div className="wrapper">
      <main>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html ?? "" }}
        />
      </main>
    </div>
  )
}

export const query = graphql`
  query BlogPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`