import React from "react"

import PageHeader from "../common/PageHeader"

import PageNewsItems from "./PageNewsItems"
export default function PageNews() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-start">
      <div className="h-[33vh] md:h-[50vh]  w-full relative bg-gradient-to-t bg-secondary">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center ">
          <div className="px-4 md:px-24 max-w-screen-2xl mx-auto w-full">
            <PageHeader text="Nyheter" />
          </div>
        </div>
      </div>
      <div className=" relative px-4 md:px-24 max-w-4xl w-full space-y-8 py-8 md:py-16">
        <div className="page-content flex flex-col md:flex-row gap-16 ">
          <div className="w-full pt-4 md:pt-8 flex-none">
            <PageNewsItems context="pageFeed" />
          </div>
        </div>
      </div>
    </div>
  )
}
