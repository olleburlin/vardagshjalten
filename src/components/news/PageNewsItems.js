import React from "react"
import NewsItem from "./NewsItem"
import { useStaticQuery, graphql } from "gatsby"

export default function PageNewsItems({ context }) {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: { order: ASC, fields: date }) {
        nodes {
          uri
          title
          excerpt
          date(formatString: "YYYY.MM.DD")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          content
        }
      }
    }
  `)
  const news = data.allWpPost.nodes
  return (
    <div>
      <div>
        {news.map((post, i) => {
          return <NewsItem key={i} post={post} context={context} />
        })}
      </div>
      <div>{news.length === 0 && "Inga nyheter för tillfället"}</div>
    </div>
  )
}
