import * as React from "react"
import HeaderBar from "./common/HeaderBar"

function Layout({ children, isHome }) {
  return (
    <div className="md:min-h-screen antialiased relative  leading-relaxed text-secondary">
      <div className="flex flex-col md:flex-row md:h-full w-full relative">
        <div
          className={`${
            isHome ? "absolute" : "static"
          }  md:fixed md:top-0 md:left-0 z-20 w-full md:w-24 md:h-screen`}
        >
          <HeaderBar />
        </div>
        <div className="h-full w-full relative md:ml-24">
          <main className="h-full w-full">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
