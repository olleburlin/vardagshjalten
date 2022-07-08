import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../common/Button"

export default function Hemstadning() {
  return (
    <div className="relative">
      <div className="relative bg-secondary z-10 py-8 md:py-16 overflow-hidden">
        <div className=" relative z-20 max-w-screen-2xl mx-auto container px-4 md:px-8">
          <div className="flex flex-col gap-8 md">
            <h3 className="">Hemstädning</h3>
            <p className="text-2xl md:text-7xl text-white font-bold">
              Prioritera din tid, vi tar hand om ditt hem
            </p>
            <div>
              <div className="inline-block">
                <Button
                  text="Allt om hemstädning"
                  url="/tjanster/hemstadning"
                />
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
