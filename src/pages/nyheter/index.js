import React from "react"
import PageNews from "../../components/news/PageNews"
import Layout from "../../components/layout"

import SEO from "../../components/seo"

export default function NyheterPage() {
  return (
    <Layout>
      <SEO title="Nyheter" />
      <PageNews />
    </Layout>
  )
}
