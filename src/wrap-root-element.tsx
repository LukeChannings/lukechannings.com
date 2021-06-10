import React, { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {}

export const wrapRootElement = ({ element }: { element: ReactNode }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
