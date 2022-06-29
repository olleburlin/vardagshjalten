import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Loneforman() {
  return (
    <div>
      <StaticImage src="../../images/wave.png" quality={100} />
      <div className="max-w-8xl px-4 md:px-8 mx-auto container  py-8 md:py-16">
        <div className="">
          <h3>Löneförmån för dina anställda</h3>
        </div>
      </div>
    </div>
  )
}
