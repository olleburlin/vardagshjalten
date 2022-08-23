import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../common/Button"
import { useStaticQuery, graphql } from "gatsby"

export default function Rekommendera() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 40 }) {
        id
        rekommendationer {
          knapptextRek
          rubrikRek
          underrubrikRek
        }
      }
    }
  `)
  const { knapptextRek, rubrikRek, underrubrikRek } =
    data.wpPage.rekommendationer
  return (
    <div className="relative">
      <div className="relative bg-primary z-10 py-8 md:py-16 overflow-hidden">
        <div className=" relative z-20 max-w-screen-2xl mx-auto container px-4 md:px-8">
          <div className="flex flex-col gap-4 md">
            <h3 className="text-secondary">{rubrikRek}</h3>
            <div className="space-y-8 leading-normal">
              <p className="text-2xl md:text-7xl text-white font-bold leading-normal">
                <span className="leading-snug">{underrubrikRek}</span>
              </p>
              <div>
                <div className="inline-block">
                  <Button text={knapptextRek} url="/boka" theme="light" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-0 top-0 w-full mix-blend-multiply opacity-30">
          <StaticImage
            src="../../images/rekommendera.jpg"
            className="object-cover w-full relative md:bottom-24"
          />
        </div>
      </div>
    </div>
  )
}

// <div className="relative overflow-hidden">
// <div className="relative overflow-hidden z-10 bg-primary py-8 md:py-16">
//   <div className="max-w-screen-2xl relative z-20 mx-auto container px-4 md:px-8">
//     <div className="space-y-4">
//       <SectionHeader text="Rekommendationer" theme="light" />
//       <p className="text-3xl md:text-7xl text-white font-bold">
//         Rekommendera oss, vi bjuder på halva städkostnaden vid nästa
//         tillfälle
//       </p>
//       <div>
//         <div className="inline-block">
//           <Button text="Rekommendera" url="/boka" theme="light" />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="absolute z-0 top-0 w-full mix-blend-multiply opacity-40">
//   <StaticImage
//     src="../../images/hemstad.jpg"
//     className="object-cover w-full relative md:bottom-24"
//   />
// </div>
// </div>
