import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SectionHeader from "../common/SectionHeader"

export default function Partners() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 40 }) {
        id
        partners {
          partners {
            loggaPartners {
              width
              height
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    }
  `)
  const partners = data.wpPage.partners.partners
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto container  py-8 md:py-16">
        <SectionHeader text="Partners" />
        <div className="grid md:grid-cols-5 gap-4 md:gap-8 items-center">
          {partners.map((partner, i) => {
            return <Partner key={i} partner={partner} />
          })}
        </div>
      </div>
    </div>
  )
}

function Partner({ partner }) {
  const { loggaPartners } = partner
  const img = loggaPartners.localFile.childImageSharp
  const ratio = loggaPartners.width / loggaPartners.height

  return (
    <div className="p-4">
      <GatsbyImage
        image={getImage(img)}
        className={`${ratio >= 0.8 && ratio <= 1.2 ? "m-8" : ""}`}
      />
    </div>
  )
}
