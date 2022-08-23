import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../common/Button"
import SectionHeader from "../common/SectionHeader"
import { useStaticQuery, graphql } from "gatsby"

export default function Kampanj() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 40 }) {
        id
        kampanj {
          asteriskKampanj
          huvudrubrikKampanj
          textKampanj
          underrubrikKampanj
          bildKampanj {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  const {
    asteriskKampanj,
    huvudrubrikKampanj,
    textKampanj,
    underrubrikKampanj,
    bildKampanj,
  } = data.wpPage.kampanj

  return (
    <div className="bg-white">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8 py-8 md:py-16 space-y-4 ">
        <div className="flex  flex-col lg:flex-row items-start gap-8 md:gap-16 my-8 w-full">
          <div className="w-full lg:w-1/2 order-last lg:order-first">
            {" "}
            <GatsbyImage
              image={getImage(bildKampanj.localFile.childImageSharp)}
              alt="Hund"
              className="h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center  text-xl">
            <div className="lg:-mt-8">
              <SectionHeader text={huvudrubrikKampanj} theme="dark" />
            </div>
            <div className="space-y-4 lg:space-y-8">
              <div className="text-3xl lg:text-7xl font-bold leading-none">
                <div className="leading-snug xl:pr-40">
                  {underrubrikKampanj}{" "}
                </div>
              </div>
              <div className="space-y-4">
                <div
                  dangerouslySetInnerHTML={{ __html: textKampanj }}
                  className="wp-content"
                />
              </div>
              <div>
                <Button text="Få offert" url="/offert" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  <div
                    dangerouslySetInnerHTML={{ __html: asteriskKampanj }}
                    className="wp-content"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}
