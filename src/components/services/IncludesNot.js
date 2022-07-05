import React from "react"
import IncludesList from "./IncludesList"

export default function IncludesNot({ innefattarInte, service }) {
  const { punkterInnefattarinte, fritextInnefattarinte } = innefattarInte

  return (
    <div className="space-y-4 md:space-y-8">
      <h2>Vad ingår inte?</h2>
      <div>
        <div dangerouslySetInnerHTML={{ __html: fritextInnefattarinte }} />
      </div>
      <ul className="list-outside list-disc pl-4">
        {punkterInnefattarinte.map((punkt, i) => {
          return <li key={i}>{punkt.punktInnefattarinte}</li>
        })}
      </ul>
    </div>
  )
}
