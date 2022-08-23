import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../common/Button"
import { useStaticQuery, graphql } from "gatsby"

export default function Hemstadning() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 40 }) {
        id
        hemstadning {
          knapptextHemstad
          rubrikHemstad
          underrubrikHemstad
        }
      }
    }
  `)
  const { knapptextHemstad, rubrikHemstad, underrubrikHemstad } =
    data.wpPage.hemstadning
  return (
    <div className="relative">
      <div className="relative bg-secondary z-10 py-8 md:py-16 overflow-hidden">
        <div className=" relative z-20 max-w-screen-2xl mx-auto container px-4 md:px-8">
          <div className="flex flex-col gap-8 md">
            <h3 className="">{rubrikHemstad}</h3>
            <p className="text-2xl md:text-7xl text-white font-bold">
              {underrubrikHemstad}
            </p>
            <div>
              <div className="inline-block">
                <Button text={knapptextHemstad} url="/tjanster/hemstadning" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-0 top-0 w-full mix-blend-multiply opacity-40">
          <StaticImage
            src="../../images/hemstad.jpg"
            className="object-cover w-full relative md:bottom-24"
          />
        </div>
      </div>
    </div>
  )
}
