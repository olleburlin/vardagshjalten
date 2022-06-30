import React from "react"
import Hemstadning from "../components/index/Hemstadning"

import Hero from "../components/index/Hero"
import JobForUs from "../components/index/JobForUs"
import Location from "../components/index/Location"

import Partners from "../components/index/Partners"
import Rekommendera from "../components/index/Rekommendera"
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
    <Location />
    <Hemstadning />
    <Rekommendera />
    <Partners />
    <JobForUs />
  </Layout>
)

export default IndexPage
