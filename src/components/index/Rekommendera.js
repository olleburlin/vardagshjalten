import React from "react"
import Button from "../common/Button"
export default function Rekommendera() {
  return (
    <div className="bg-primary py-8 md:py-16">
      <div className="max-w-7xl mx-auto container">
        <div className="flex flex-col gap-8 md">
          <h3 className="text-secondary">Rekommendationer</h3>
          <p className="text-3xl md:text-7xl text-white font-bold">
            Rekommendera oss, vi bjuder på halva städkostnaden vid nästa
            tillfälle.
          </p>
          <div>
            <div className="inline-block">
              <Button
                text="Rekommendera"
                url="/tjanster/hemstadning"
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
