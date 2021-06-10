import React from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
