import React from "react"
import Button from "../common/Button"
import SectionHeader from "../common/SectionHeader"
export default function Rekommendera() {
  return (
    <div className="bg-primary py-8 md:py-16">
      <div className="max-w-screen-2xl mx-auto container px-4 md:px-8">
        <div className="space-y-4">
          <SectionHeader text="Rekommendationer" theme="light" />
          <p className="text-3xl md:text-7xl text-white font-bold">
            Rekommendera oss, vi bjuder på halva städkostnaden vid nästa
            tillfälle
          </p>
          <div>
            <div className="inline-block">
              <Button text="Rekommendera" url="/boka" theme="light" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
