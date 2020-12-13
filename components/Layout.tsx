import React, { ReactNode } from "react"
import Head from "next/head"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link
        rel="preload"
        href="/fonts/Roboto-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/SpaceMono-Regular.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>
    {children}
  </div>
)

export default Layout
