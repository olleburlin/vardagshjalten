import React from "react"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Link from "../common/Link"

export default function ServicesListPage() {
  const data = useStaticQuery(graphql`
    {
      allWpTjanst {
        nodes {
          title
          uri
          grundinfo {
            ingressFramsidaTjanst
            kompletterandeInformationFramsida
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.5)
                }
              }
            }
          }
        }
      }
    }
  `)
  const services = data.allWpTjanst.nodes

  return (
    <div className="min-h-screen  flex flex-col items-center justify-start">
      <div className="relative bg-secondary">
        <StaticImage
          src="../../images/disk.jpg"
          className="h-screen/3 md:h-screen/2 opacity-50 h-[40vh]"
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center ">
          <div className="px-4 md:px-24 max-w-screen-2xl mx-auto w-full">
            <h1 className="text-center text-4xl md:text-7xl text-white font-bold underline decoration-4 md:decoration-8 decoration-primary">
              Tjänster
            </h1>
          </div>
        </div>
      </div>
      <div className="relative px-4 md:px-24 max-w-screen-2xl w-full space-y-8 md:space-y-16 py-8 md:py-16">
        <div className="  max-w-4xl mx-auto md:py-8">
          <div className="text-xl space-y-4">
            <p>
              Vi värnar om ditt hem eller era lokaler och hjälper er på bästa
              sätt för att resultatet ska bli skinande rent och hemtrevligt. Vi
              har noggrant utvald personal som kommer gå på djupet och se till
              att det blir ett riktigt nöje att komma in till ert nystädade hem
              eller kontor.
            </p>

            <p>
              Nedanför kan du se de olika sorters städtjänster som vi erbjuder.
              Vi har både engångsuppdrag och löpande tjänster.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 ">
          {services.map((service, i) => {
            return <SingleServiceItem key={i} service={service} />
          })}
        </div>
      </div>
    </div>
  )
}
function SingleServiceItem({ service }) {
  const { title, featuredImage, uri } = service

  const image = featuredImage?.node.localFile.childImageSharp

  return (
    <div className="flex flex-col md:gap-2 space-y-4 md:space-y-0 md:pb-4">
      {" "}
      <Link to={uri}>
        <GatsbyImage image={getImage(image)} alt={title} className="" />
      </Link>
      <div className=" flex flex-col">
        <div className="font-bold text-2xl tracking-tight ">
          <Link to={uri}>{title}</Link>
        </div>
      </div>
      <div className="hidden font-bold  tracking-tight ">
        <Link to={uri}>
          <span className=" underline underline-offset-2 decoration-primary decoration-2  hover:text-primary  transition-all">
            Läs mer
          </span>
        </Link>
      </div>
    </div>
  )
}
