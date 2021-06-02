import React from "react"

interface Props {
  htmlAttributes: React.HtmlHTMLAttributes<HTMLHtmlElement>
  bodyAttributes: React.HTMLAttributes<HTMLBodyElement>
  headComponents: Array<JSX.Element>
  preBodyComponents: Array<JSX.Element>
  postBodyComponents: Array<JSX.Element>
  body: string
}

export default function HTML(props: Props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "4accf575ede741c686a33d3013670727"}'
        ></script>
      </body>
    </html>
  )
}
