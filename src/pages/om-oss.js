import React from "react"
import { graphql } from "gatsby"
import FeaturedImagePage from "../components/common/FeaturedImagePage"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function OmOssPage({ data }) {
  const image = data.wpPage.featuredImage?.node.localFile.childImageSharp
  const { title, content } = data.wpPage
  return (
    <Layout>
      <SEO title="Om oss" />
      <div className="flex flex-col items-center justify-start min-h-screen">
        <div className=" w-full relative bg-gradient-to-t bg-black">
          {image && <FeaturedImagePage image={image} />}
          <div className="absolute top-0 w-full h-full flex flex-col justify-center ">
            <div className="px-4 md:px-24 max-w-screen-2xl mx-auto w-full">
              <h1 className="text-center text-4xl md:text-7xl text-white font-bold underline decoration-4 md:decoration-8 decoration-primary">
                {title}
              </h1>
            </div>
          </div>
        </div>
        <div className=" relative px-4 md:px-24 max-w-screen-2xl w-full space-y-8 py-8 md:py-16">
          <div className="page-content max-w-4xl mx-auto">
            <div className="md:col-span-2 space-y-4 md:space-y-8">
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>
        </div>
        <blockquote></blockquote>
      </div>
      <div className="hidden">
        <a className="inline-btn hidden" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    wpPage(databaseId: { eq: 83 }) {
      id
      title
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
`
