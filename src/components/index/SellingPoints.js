import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { CheckCircleIcon } from "@heroicons/react/solid"

export default function SellingPoints() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 40 }) {
        id
        sellingPoints {
          punkterSellingpoints {
            beskrivningSellingpoint
            titelSellingpoint
          }
        }
      }
    }
  `)
  const points = data.wpPage.sellingPoints?.punkterSellingpoints
  console.log(points)
  return (
    <div className="bg-secondary/10 text-secondary">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-32 space-y-32">
        <div className="grid md:grid-cols-4 gap-4 md:gap-16">
          {points?.slice(0, 4).map((sellingPoint, i) => {
            return <SellingPoint key={i} sellingPoint={sellingPoint} />
          })}
        </div>
      </div>
    </div>
  )
}

function SellingPoint({ sellingPoint }) {
  const { titelSellingpoint, beskrivningSellingpoint } = sellingPoint
  return (
    <div className="flex flex-col  gap-4 text-xl">
      <div className="w-24">
        <CheckCircleIcon className="text-primary" />
      </div>
      <div className="font-bold text-2xl">{titelSellingpoint}</div>
      <div>{beskrivningSellingpoint}</div>
    </div>
  )
}
