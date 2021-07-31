import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

const Seo = () => {
  const { title, description } = useSiteMetadata()

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <html lang="en" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <title>{title}</title>
    </Helmet>
  )
}

export default Seo
