import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "../common/Link"
import SectionHeader from "../common/SectionHeader"

export default function NewsIndex() {
  const data = useStaticQuery(graphql`
    {
      allWpPost(limit: 3) {
        nodes {
          date(formatString: "YY.MM.DD")
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
  const posts = data.allWpPost.nodes
  return (
    <div className="bg-secondary/40">
      <div className="py-8 md:py-16 container max-w-7xl mx-auto  px-4 md:px-8">
        <SectionHeader text="Nyheter" />
        <div className="my-8 grid md:grid-cols-3 gap-4 md:gap-8">
          {posts.map((post, i) => {
            return <NewsIndexItem key={i.id} post={post} />
          })}
        </div>
      </div>{" "}
    </div>
  )
}

function NewsIndexItem({ post }) {
  const { title, date, uri } = post
  return (
    <div>
      <Link to={"nyheter" + uri}>
        <div>{date}</div>
        <h4>{title}</h4>
      </Link>
    </div>
  )
}
