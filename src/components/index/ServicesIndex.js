import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../common/Button"

export default function ServicesIndex() {
  const data = useStaticQuery(graphql`
    {
      allWpTjanst(limit: 3) {
        nodes {
          title
          grundinfo {
            ingressFramsidaTjanst
            kompletterandeInformationFramsida
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
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
    <div className="bg-gradient-to-b from-primary/10 to-primary/40">
      <div className="container px-4 md:px-8 mx-auto py-16 grid gap-4 md:gap-8">
        <div>
          {services.map((service, i) => {
            return <Service key={i} oddEven={i} service={service} />
          })}
        </div>{" "}
        <div className="flex items-center justify-center">
          <Button text="Visa alla &rarr;" url="/tjanster" />
        </div>
      </div>
    </div>
  )
}

function Service({ service, oddEven }) {
  const { title, featuredImage, grundinfo } = service
  const { ingressFramsidaTjanst, kompletterandeInformationFramsida } = grundinfo
  const img = featuredImage?.node.localFile

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-16 p-4 md:p-8 items-center">
        <div className={`${oddEven % 2 ? "md:order-last" : ""} col-span-2`}>
          <div className="bg-secondary">
            <GatsbyImage image={getImage(img)} className="" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex h-full flex-col justify-center gap-4 text-secondary">
            <h4 className="text-4xl font-bold">{title}</h4>
            <p className="md:text-xl font-bold">{ingressFramsidaTjanst}</p>
            <p className="md:text-xl">{kompletterandeInformationFramsida}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
