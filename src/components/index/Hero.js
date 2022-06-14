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
                childrenImageSharp {
                  gatsbyImageData(formats: JPG, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="md:h-screen">
      <div className="h-full overflow-hidden relative">
        <div className="absolute h-full w-full bg-black">
          <StaticImage
            src="../../images/disk.jpg"
            class="h-full w-full opacity-60"
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
              <Button text="Boka möte" theme="light" url="/" />
              <Button text="Våra tjänster" theme="dark" url="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
