import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../common/Button"
import SectionHeader from "../common/SectionHeader"
import Link from "../common/Link"

export default function ServicesIndex() {
  const data = useStaticQuery(graphql`
    {
      allWpTjanst(limit: 3) {
        nodes {
          title
          uri
          grundinfo {
            ingressFramsidaTjanst
            kompletterandeInformationFramsida
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.5)
                }
              }
            }
          }
        }
      }
    }
  `)
  const services = data.allWpTjanst.nodes
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto container px-4 md:px-8 py-8 md:py-16 space-y-8">
        <div className=" grid md:grid-cols-3 gap-x-4 gap-y-8 md:gap-16 w-full">
          {services.map((service, i) => {
            return <Service key={i} service={service} />
          })}
        </div>
        <div className="pt-8 md:pt-16 flex">
          <div className="inline-block">
            <Button text="Visa alla &rarr;" url="/tjanster" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Service({ service }) {
  const { title, featuredImage, grundinfo, uri } = service
  const { ingressFramsidaTjanst } = grundinfo
  const img = featuredImage?.node.localFile

  return (
    <div className="space-y-4">
      <div>
        <Link to={uri}>
          <div className="bg-secondary">
            <GatsbyImage image={getImage(img)} className="" alt="Tjänst" />
          </div>
        </Link>
      </div>
      <div>
        <div className="flex  flex-col gap-4 text-secondary">
          <Link to={uri}>
            {" "}
            <h2 className="text-3xl">{title}</h2>
          </Link>
          <p className="md:text-xl">{ingressFramsidaTjanst}</p>
        </div>
      </div>
    </div>
  )
}
