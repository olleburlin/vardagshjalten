import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function FeaturedImagePage({ image }) {
  return (
    <div>
      <GatsbyImage
        image={getImage(image)}
        className="h-[33vh] md:h-[50vh] opacity-60 w-full "
      />
    </div>
  )
}
