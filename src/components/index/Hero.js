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
        <div className="absolute h-full w-full bg-black">
          <GatsbyImage
            image={getImage(img)}
            class="h-full w-full opacity-60"
            alt="Hero Image"
          />
        </div>
        <div className="relative w-full h-full inset-x-0 flex items-center justify-start">
          <div className="ml-24 text-white space-y-4">
            <h1 className=" text-8xl leading-tight font-bold">
              Hinner du inte med? <br /> Prioritera din tid!
            </h1>
            <p className="text-5xl font-bold leading-normal">
              Vardagshjälten är städbolaget med helhetslösningar
              <br /> för hem, lokal eller flytt.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button text="Boka möte" theme="light" url="/boka" />
              <Button text="Våra tjänster" theme="dark" url="/tjanster" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
