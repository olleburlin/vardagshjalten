import React from "react"
import IncludesList from "./IncludesList"

export default function Includes({ innefattar, service }) {
  const { listor, fritext } = innefattar
  // innefattar {
  //     listor {
  //       punkter {
  //         punkt
  //       }
  //       rubrikListor
  //     }
  //     fritext
  //   }

  return (
    <div className="space-y-4 md:space-y-8">
      <h2>{service + " Innefattar"}</h2>
      <div>
        <div dangerouslySetInnerHTML={{ __html: fritext }} />
      </div>
      <IncludesList listor={listor} />
    </div>
  )
}
