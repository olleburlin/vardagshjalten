import { func } from "prop-types"
import React from "react"
import Button from "../common/Button"

export default function ServicesPrices({ prices }) {
  const { extraText, prisklass } = prices
  const pricePoints = prisklass
  return (
    <div id="prices" className="space-y-4 text-lg">
      <h3 className="">Priser</h3>
      {pricePoints && (
        <div className=" divide-y divide-primary">
          {pricePoints.map((pricePoint, i) => {
            return <PricePoint key={i} pricePoint={pricePoint} />
          })}
        </div>
      )}
      <div className="extra-text">
        <div
          className="space-y-2 text-sm "
          dangerouslySetInnerHTML={{ __html: extraText }}
        />
      </div>
      <div className="inline-block">
        <Button text="Boka möte" theme="dark" url="/boka" />
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
