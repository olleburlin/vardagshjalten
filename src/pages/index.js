import React from "react"
import Hero from "../components/index/Hero"

import Partners from "../components/index/Partners"
import SellingPoints from "../components/index/SellingPoints"
import ServicesIndex from "../components/index/ServicesIndex"
import Testimonials from "../components/index/Testimonials"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Startsida" />
    <Hero />
    <ServicesIndex />
    <SellingPoints />
    <Testimonials />

    <Partners />
  </Layout>
)

export default IndexPage
