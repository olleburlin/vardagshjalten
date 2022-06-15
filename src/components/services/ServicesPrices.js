import { func } from "prop-types"
import React from "react"

export default function ServicesPrices({ prices }) {
  const { extraText, prisklass } = prices
  const pricePoints = prisklass
  return (
    <div className="space-y-2 text-lg">
      <h3 className="">Priser</h3>
      <div className=" divide-y divide-primary">
        {pricePoints.map((pricePoint, i) => {
          return <PricePoint key={i} pricePoint={pricePoint} />
        })}
      </div>
      <div>
        <div
          className="space-y-2 text-sm"
          dangerouslySetInnerHTML={{ __html: extraText }}
        />
      </div>
    </div>
  )
}

function PricePoint({ pricePoint }) {
  const { timpris, titel } = pricePoint
  return (
    <div className="grid grid-cols-2 py-1">
      <div>{titel}</div>
      <div>{timpris}</div>
    </div>
  )
}
