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
    <div className="md:h-screen">
      <div className="h-full overflow-hidden relative">
        <div className="absolute h-full w-full bg-secondary">
          <GatsbyImage
            image={getImage(img)}
            class="h-full w-full opacity-70"
            alt="Hero Image"
          />
        </div>
        <div className="relative w-full h-full inset-x-0 flex items-center justify-start">
          <div className="md:ml-24 text-white space-y-4 md:space-y-8 p-8">
            <h1 className="text-3xl md:text-8xl leading-tight font-bold">
              Hinner du inte med? <br /> Prioritera din tid!
            </h1>
            {/* <p className="text-2xl md:text-5xl font-bold leading-normal md:leading-relaxed">
              Vardagshjälten är städbolaget med helhetslösningar
              <br /> för hem, lokal eller flytt.
            </p> */}
            <div className="flex flex-col md:flex-row gap-4 text-center md:text-inherit">
              <Button text="Boka möte" theme="dark" url="/boka" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
