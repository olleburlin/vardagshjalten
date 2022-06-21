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
    <>
      {news.map((post, i) => {
        return <NewsItem key={i} post={post} context={context} />
      })}
      {news.length === 0 && "Inga nyheter för tillfället"}
    </>
  )
}
