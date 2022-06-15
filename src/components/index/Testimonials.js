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
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-32 space-y-32">
        <div>
          <SectionHeader text="Referenser" theme="light" />
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-16">
          {quotes.map((quote, i) => {
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
    <div className="flex flex-col gap-4 text-2xl">
      <div>{textCitat}</div>
      <div className="font-bold">{avsandare}</div>
    </div>
  )
}
