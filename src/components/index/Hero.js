import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Button from "../common/Button"
import Link from "../common/Link"
import HeroMovie from "../common/HeroMovie"
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
            class="h-full w-full opacity-30"
            alt="Hero Image"
          />
          {/* <HeroMovie /> */}
        </div>

        <div className="relative w-full h-full inset-x-0 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          <div className="lg:ml-24 text-white space-y-4 md:space-y-8 p-4 ">
            <h1 className="text-4xl md:text-6xl text-center lg:text-left lg:text-7xl xl:text-8xl  font-bold">
              <span className="leading-snug">
                Hem- &amp; företagsstäd. <br />
                Trygghet, kvalitet &amp; omtanke.
              </span>
            </h1>

            <div className=" md:text-inherit text-center lg:text-left">
              <Button text="Våra tjänster" theme="dark" url="/tjanster" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
