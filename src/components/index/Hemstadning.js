import React from "react"
import Button from "../common/Button"

export default function Hemstadning() {
  return (
    <div className="bg-secondary py-8 md:py-16">
      <div className="max-w-7xl mx-auto container px-4 md:px-8">
        <div className="flex flex-col gap-8 md">
          <h3 className="">Hemstädning</h3>
          <p className="text-3xl md:text-7xl text-white font-bold">
            Prioritera din tid, vi tar hand om ditt hem.
          </p>
          <div>
            <div className="inline-block">
              <Button text="Allt om hemstädning" url="/tjanster/hemstadning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
