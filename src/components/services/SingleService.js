import React from "react"
import FeaturedImagePage from "../common/FeaturedImagePage"
import Includes from "./Includes"
import IncludesNot from "./IncludesNot"
import ServicesPrices from "./ServicesPrices"
// import Link from "../common/Link"

export default function SingleKurs({ page }) {
  const {
    title,
    grundinfo,
    innefattar,
    innefattarInte,
    priserTjanst,
    featuredImage,
  } = page
  const { information } = grundinfo
  const image = featuredImage?.node.localFile.childImageSharp

  return (
    <div className="flex flex-col items-center justify-start">
      <div className=" w-full relative bg-gradient-to-t bg-black">
        {image && <FeaturedImagePage image={image} />}
        <div className="absolute top-0 w-full h-full flex flex-col justify-center ">
          <div className="px-4 md:px-24 max-w-screen-2xl mx-auto w-full">
            <h1 className="text-center text-4xl md:text-7xl text-white font-bold underline decoration-8 decoration-primary">
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className=" relative px-4 md:px-24 max-w-screen-2xl w-full space-y-8 py-8 md:py-16">
        {/* <div className="font-medium text-gray-400 text-base">
          <Link to="/utbildningar/allmanna-kurser">&larr; Allmänna kurser</Link>
        </div> */}
        <div className="page-content grid md:grid-cols-3 gap-4 md:gap-16 ">
          <div className="md:col-span-2 space-y-4 md:space-y-8">
            <div>
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: information }}
              />
            </div>
            <div>
              {innefattar.listor && (
                <div className="border-t-2 border-primary pt-4 md:pt-8">
                  <Includes service={title} innefattar={innefattar} />
                </div>
              )}
            </div>
            <div>
              {innefattarInte.punkterInnefattarinte && (
                <IncludesNot service={title} innefattarInte={innefattarInte} />
              )}
            </div>
          </div>
          {priserTjanst.prisklass && (
            <div className="md:col-span-1">
              <div className="bg-primary/20 p-8">
                <ServicesPrices prices={priserTjanst} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
