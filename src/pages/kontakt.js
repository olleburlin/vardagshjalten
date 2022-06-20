import React from "react"
import { graphql } from "gatsby"
import FeaturedImagePage from "../components/common/FeaturedImagePage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/common/Button"

export default function KontaktPage({ data }) {
  const image = data.wpPage.featuredImage?.node.localFile.childImageSharp
  const { title, content, kontor } = data.wpPage

  const offices = kontor.kontor
  console.log(offices)
  return (
    <Layout>
      <SEO title="Kontakt" />
      <div className="flex flex-col items-center justify-start min-h-screen">
        <div className=" w-full relative bg-gradient-to-t bg-black">
          {image && <FeaturedImagePage image={image} />}
          <div className="absolute top-0 w-full h-full flex flex-col justify-center ">
            <div className="px-4 md:px-24 max-w-screen-2xl mx-auto w-full">
              <h1 className="text-center text-7xl text-white font-bold underline decoration-8 decoration-primary">
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
              <div className="flex flex-col w-full items-center justify-center">
                <div className="inline-block py-4">
                  <Button text="Få en offert" url="/offert" />
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4 md:gap-8">
                {offices.map((office, i) => {
                  return <Office key={i} office={office} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function Office({ office }) {
  const { namnKontor, epostLokal, telefonLokal } = office
  return (
    <div>
      <h3>{namnKontor}</h3>
      <div className="">
        <a href={`mailto:${epostLokal}`}>{epostLokal}</a>
      </div>
      <div>{telefonLokal}</div>
    </div>
  )
}

export const query = graphql`
  {
    wpPage(databaseId: { eq: 89 }) {
      id
      title
      content
      kontor {
        kontor {
          namnKontor
          telefonLokal
          epostLokal
        }
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
    }
  }
`
