import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Button from "../common/Button"
export default function Hero() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 40 }) {
        id
        bildspel {
          bilder {
            bild {
              localFile {
                childImageSharp {
                  gatsbyImageData(formats: JPG, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `)
  const img = data.wpPage.bildspel.bilder[0].bild.localFile.childImageSharp

  return (
    <div className="h-[50vh] md:h-screen">
      <div className="h-full overflow-hidden relative">
        <div className="absolute h-full w-full bg-secondary">
          <GatsbyImage
            image={getImage(img)}
            class="h-full w-full opacity-70"
            alt="Hero Image"
          />
        </div>
        <div className="absolute -right-8 -bottom-4 lg:right-0 lg:bottom-0">
          <div className="w-56 lg:w-96">
            <StaticImage src="../../images/halland.png" />
          </div>
        </div>
        <div className="relative w-full h-full inset-x-0 flex items-center justify-start">
          <div className="md:ml-24 text-white space-y-4 md:space-y-8 p-8 ">
            <h1 className="text-4xl md:text-8xl  font-bold">
              <span className="leading-snug">
                Hem- &amp; företagsstäd. <br />
                Trygghet, kvalitet &amp; omtanke.
              </span>
            </h1>
            {/* <p className="text-2xl md:text-5xl font-bold leading-normal md:leading-relaxed">
              Vardagshjälten är städbolaget med helhetslösningar
              <br /> för hem, lokal eller flytt.
            </p> */}
            <div className=" md:text-inherit">
              <Button text="Boka möte" theme="dark" url="/boka" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
