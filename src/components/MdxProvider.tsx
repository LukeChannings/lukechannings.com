import React from "react"
import { MDXProvider } from "@mdx-js/react"
import type { HTMLAttributes, ReactNode } from "react"
import { Addendum } from "./Addendum"

console.log(Addendum)

const components = {
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} target="_blank" />
  ),
  Addendum,
}

export const wrapRootElement = ({ element }: { element: ReactNode }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
