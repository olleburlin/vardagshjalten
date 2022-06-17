import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="h-screen flex flex-col items-center md:justify-center pt-16 md:pt-0 bg-secondary bg-opacity-30">
      <h1>Kommer snart</h1>
      <p></p>
    </div>
  </Layout>
)

export default NotFoundPage
