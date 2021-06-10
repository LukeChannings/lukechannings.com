const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === "Mdx" &&
    node.fileAbsolutePath.includes("/blogs/")
  ) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "blogs/",
    })

    createNodeField({
      node,
      name: "slug",
      value: `/blog${relativeFilePath}`,
    })
  }
}
