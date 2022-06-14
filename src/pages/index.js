import React from "react"
import Hero from "../components/index/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Startsida" />
    <Hero />
  </Layout>
)

export default IndexPage
