import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import SectionHeader from "../common/SectionHeader"

export default function Testimonials() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 40 }) {
        id
        referenser {
          citat {
            avsandare
            textCitat
          }
        }
      }
    }
  `)

  const quotes = data.wpPage.referenser.citat
  return (
    <div className="bg-secondary  text-third">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-32  space-y-8 md:space-y-16">
        <div>
          <SectionHeader text="Referenser" theme="light" />
        </div>
        <div className="grid md:grid-cols-4 gap-8 md:gap-16 ">
          {quotes.slice(0, 4).map((quote, i) => {
            return <Quote key={i} quote={quote} />
          })}
        </div>
      </div>
    </div>
  )
}

function Quote({ quote }) {
  const { avsandare, textCitat } = quote
  return (
    <div className="flex flex-col gap-4 text-lg md:text-xl">
      <div className="italic">{textCitat}</div>
      <div className="font-bold">{avsandare}</div>
    </div>
  )
}
