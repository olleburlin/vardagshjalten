import React from "react"
import PageNewsItems from "./PageNewsItems"

export default function SingleNewsPage({ post }) {
  console.log(post)
  const { title, content, date } = post
  return (
    <div className="min-h-screen  flex flex-col items-center justify-start">
      <div className="h-[33vh] md:h-[50vh]  w-full relative bg-gradient-to-t bg-primary">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center ">
          <div className="px-4 md:px-24 max-w-screen-2xl mx-auto w-full">
            <h1 className="text-center text-7xl text-white font-bold underline decoration-8 decoration-primary">
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className=" relative px-4 md:px-24 max-w-screen-2xl w-full space-y-4 md:space-y-8 py-8 md:py-16">
        <p className="italic">Publicerad: {date}</p>
        <div className="page-content flex flex-col md:flex-row gap-8 md:gap-16 border-secondary border-t-4">
          <div className="w-full md:w-2/3 pt-4 md:pt-8 flex-none">
            <div
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-secondary/20 p-4 md:p-8 grid gap-2 md:gap-4">
              <h4>Fler nyheter</h4>
              <div className="grid gap-4">
                {" "}
                <PageNewsItems context="sidebar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
