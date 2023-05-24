import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import SingleService from "../components/services/SingleService"

export default function PageTemplate({ data }) {
  const page = data.wpTjanst
  return (
    <div className="">
      <Seo title={page.title} />
      <Layout>
        <SingleService page={page} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query ($id: String!) {
    wpTjanst(id: { eq: $id }) {
      title
      uri
      id
      databaseId
      grundinfo {
        information
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      innefattar {
        listor {
          punkter {
            punkt
          }
          rubrikListor
        }
        fritext
      }
      innefattarInte {
        fritextInnefattarinte
        punkterInnefattarinte {
          punktInnefattarinte
        }
      }
      priserTjanst {
        extraText
        prisklass {
          timpris
          titel
        }
      }
    }
  }
`
