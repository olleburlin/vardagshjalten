import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "../common/Link"

export default function HemstadLandingpagesMenu() {
  const data = useStaticQuery(graphql`
    query {
      allWpTjanst(
        filter: {
          kategoriTjanster: {
            nodes: { elemMatch: { databaseId: { eq: 344 } } }
          }
        }
      ) {
        nodes {
          title
          uri
        }
      }
    }
  `)

  const landingpages = data.allWpTjanst.nodes

  return (
    <div className="flex flex-col gap-4 max-w-4xl">
      <h5>Hemstädning finns i dessa städer:</h5>
      <ul className="flex flex-row flex-wrap gap-4">
        {landingpages.map(page => {
          return <Landingpage key={page.id} page={page} />
        })}
      </ul>
    </div>
  )
}

function Landingpage({ page }) {
  const { title, uri } = page
  const trimmedTitle = title.substring(12)
  return (
    <li>
      <Link to={uri} className="hover:underline">
        {trimmedTitle}
      </Link>
    </li>
  )
}
