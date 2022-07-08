import React from "react"
import Hemstadning from "../components/index/Hemstadning"

import Hero from "../components/index/Hero"
import JobForUs from "../components/index/JobForUs"
import Kampanj from "../components/index/Kampanj"
import Location from "../components/index/Location"
import NewsIndex from "../components/index/NewsIndex"

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

    <Rekommendera />
    <Location />
    <Hemstadning />
    <Testimonials />
    <Partners />

    <JobForUs />
    <Kampanj />
  </Layout>
)

export default IndexPage
