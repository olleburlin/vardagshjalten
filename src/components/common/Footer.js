import React from "react"
import LoggaMono from "./LoggaMono"
import SocialLinks from "./SocialLinks"

export default function Footer() {
  return (
    <div className=" bg-gray-900 py-32 text-white">
      <div className="container mx-auto max-w-8xl  flex flex-col md:flex-row gap-8 md:gap-16 items-start px-4 md:px-8">
        <div className="flex-1">
          <div className="w-56 md:w-72">
            <LoggaMono />
          </div>
        </div>
        <div className="flex-1 text-lg">
          Landskrona, Huvudkontor:
          <br />
          Telefon: 0418-499009
          <br />
          Email: info@vardagshjalten.se
        </div>
        <div className="flex-1 self-center">
          {" "}
          <SocialLinks fill={"#ffffff"} />
          <SocialLinks />
        </div>
      </div>{" "}
    </div>
  )
}
