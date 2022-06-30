import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import SectionHeader from "../common/SectionHeader"
import Button from "../common/Button"

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
      <div className="hidden lg:block overflow-hidden">
        <StaticImage
          src="../../images/wave.png"
          quality={100}
          className="scale-105"
        />
      </div>
      <div className="max-w-7xl mx-auto container px-4 md:px-8 py-8 md:py-16 space-y-4 md:space-y-8 lg:-mt-48 relative z-20">
        <SectionHeader text="Partners" />
        <div>
          <div className="space-y-4 md:space-y-8">
            <h3>Löneförmån för dina anställda</h3>
            <p className="text-xl md:text-2xl">
              Vid ett samarbete med oss erbjuder vi alla era anställda 10%
              rabatt på hemstädning.
            </p>
            <div className="inline-block">
              <Button text="Läs mer" />
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 items-center ">
            {partners.slice(0, 6).map((partner, i) => {
              return <Partner key={i} partner={partner} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function Partner({ partner }) {
  const { loggaPartners } = partner
  const img = loggaPartners.localFile.childImageSharp

  return (
    <div className="">
      <GatsbyImage image={getImage(img)} />
    </div>
  )
}
