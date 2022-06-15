import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesListPage from "../components/services/ServicesListPage"

const TjansterPage = () => (
  <Layout>
    <SEO title="Home" />
    <ServicesListPage />
  </Layout>
)

export default TjansterPage
