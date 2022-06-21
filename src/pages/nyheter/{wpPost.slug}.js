import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import SingleNewsPage from "../../components/news/SingleNewsPage"

export default function PostTemplate({ data }) {
  const post = data.wpPost
  return (
    <Layout>
      <SingleNewsPage post={post} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      date(formatString: "YY.MM.DD")
      title
      slug
      status
      content
      excerpt
      uri
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
`
