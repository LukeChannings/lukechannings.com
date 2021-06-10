import React, { HTMLAttributes, ReactNode } from "react"

import favicon32 from "../static/favicon-32.png"
import favicon128 from "../static/favicon-128.png"
import favicon152 from "../static/favicon-152.png"
import favicon167 from "../static/favicon-167.png"
import favicon180 from "../static/favicon-180.png"
import favicon192 from "../static/favicon-192.png"
import favicon196 from "../static/favicon-196.png"

interface HTMLProps {
  htmlAttributes: HTMLAttributes<HTMLElement>
  headComponents: ReactNode
  bodyAttributes: HTMLAttributes<HTMLBodyElement>
  preBodyComponents: ReactNode
  body: string
  postBodyComponents: ReactNode
}

export default function HTML(props: HTMLProps) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="icon" href={favicon32} sizes="32x32" />
        <link rel="icon" href={favicon128} sizes="128x128" />
        <link rel="icon" href={favicon152} sizes="152x152" />
        <link rel="icon" href={favicon167} sizes="167x167" />
        <link rel="icon" href={favicon180} sizes="180x180" />
        <link rel="icon" href={favicon192} sizes="192x192" />
        <link rel="icon" href={favicon196} sizes="196x196" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
