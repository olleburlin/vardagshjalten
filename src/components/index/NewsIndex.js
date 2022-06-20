import React from "react"
import { useStaticQuery, graphql } from "gatsby"
export default function NewsIndex() {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          title
          uri
          content
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)
  return <div></div>
}

function NewsIndexItem({ item }) {
  return <div></div>
}
