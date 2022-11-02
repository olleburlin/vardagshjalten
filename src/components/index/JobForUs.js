import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../common/Button"
import SectionHeader from "../common/SectionHeader"
import SubHeader from "../common/SubHeader"
import { useStaticQuery, graphql } from "gatsby"

export default function JobForUs() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 40 }) {
        id
        ledigaJobb {
          rubrikJobb
          textJobb
        }
      }
    }
  `)
  const { rubrikJobb, textJobb } = data.wpPage.ledigaJobb
  return (
    <div className="bg-secondary  text-third">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8 pt-16 pb-16  space-y-4">
        <div className="grid md:grid-cols-6 gap-8 items-center justify-center  -pt-8">
          <div className="col-span-3 space-y-8">
            <div>
              <SubHeader text={rubrikJobb} theme="light" />
            </div>
            <div className="">
              <div
                dangerouslySetInnerHTML={{ __html: textJobb }}
                className="wp-content"
              />{" "}
            </div>
          </div>
          <div className="col-span-4 md:col-span-3 flex flex-row gap-16 items-center p-4">
            <div className="flex-1 p-4">
              <StaticImage src="../../images/gasell2.png" />
            </div>
            <div className="flex-1 p-4">
              <StaticImage src="../../images/foretagsvan.png" />
            </div>
          </div>
        </div>
        <div className="inline-block">
          <Button text="Lediga jobb" url="https://careers.vardagshjalten.se/" />
        </div>
      </div>
    </div>
  )
}
