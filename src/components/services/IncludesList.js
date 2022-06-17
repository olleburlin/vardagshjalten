import React from "react"

export default function IncludesList({ listor }) {
  const lists = listor
  return (
    <div>
      {lists && (
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {lists?.map((list, i) => {
            return <IncludesListItem key={i} list={list} />
          })}
        </div>
      )}
    </div>
  )
}

function IncludesListItem({ list }) {
  const { rubrikListor, punkter } = list
  return (
    <div>
      <h4>{list.rubrikListor}</h4>
      <ul className="list-outside list-disc pl-3">
        {punkter.map((punkt, i) => {
          return <li key={i}>{punkt.punkt}</li>
        })}
      </ul>
    </div>
  )
}
