import React from "react"
import Link from "../components/common/Link"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TackJobbPage = () => (
  <Layout>
    <SEO title="Tack för din ansökan" />
    <div className="h-screen flex flex-col items-center md:justify-center pt-16 space-y-8 md:pt-0 bg-primary bg-opacity-30">
      <h1>Tack för din ansökan</h1>
      <p>
        <Link to="/" className="underline">
          Tillbaka till startsidan
        </Link>
      </p>
    </div>
  </Layout>
)

export default TackJobbPage
