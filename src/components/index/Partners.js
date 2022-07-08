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
          src="../../images/wave2.png"
          quality={100}
          className="scale-x-105"
        />
      </div>
      <div className="max-w-screen-2xl mx-auto container px-4 md:px-8 py-8 md:py-16  lg:-mt-48">
        <div className="relative z-10">
          <SectionHeader text="Löneförmån för dina anställda" />
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-3xl md:text-6xl font-bold relative z-10">
              Vid ett samarbete med oss erbjuder vi alla era anställda 10%
              rabatt på hemstädning
            </p>
          </div>
          <div>
            <div className="inline-block">
              <Button text="Läs mer" />
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-10 gap-8 items-center ">
            {partners.slice(0, 20).map((partner, i) => {
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
