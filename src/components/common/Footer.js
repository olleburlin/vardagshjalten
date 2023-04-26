import React from "react"
import LoggaMono from "./LoggaMono"
import SocialLinks from "./SocialLinks"

export default function Footer() {
  return (
    <div className=" bg-secondary py-16 md:py-32 text-white">
      <div className="container mx-auto max-w-screen-2xl  flex flex-col md:flex-row gap-8 md:gap-16 items-center  px-4 md:px-8">
        <div className="flex-1">
          <div className="w-56 md:w-72">
            <LoggaMono />
          </div>
        </div>
        <div className="flex-1 text-lg">
          Landskrona, Huvudkontor:
          <br />
          Telefon: 010-1470717
          <br />
          Email: info@vardagshjalten.se
        </div>
        <div className="flex-1 md:self-center">
          <div className="-ml-3">
            <SocialLinks fill={"#ffffff"} />
          </div>
        </div>
      </div>
    </div>
  )
}
