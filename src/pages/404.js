import React from "react"
import Link from "../components/common/Link"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="h-screen flex flex-col items-center md:justify-center pt-16 md:pt-0 bg-primary bg-opacity-30">
      <h1>404</h1>
      <p>
        <Link to="/" className="underline">
          Tillbaka till startsidan
        </Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
