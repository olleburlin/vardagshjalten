import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../common/Button"
import SectionHeader from "../common/SectionHeader"
import SubHeader from "../common/SubHeader"

export default function JobForUs() {
  return (
    <div className="bg-secondary  text-third">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8 pt-16 pb-16  space-y-4">
        <div className="grid md:grid-cols-6 gap-8 items-center justify-center  -pt-8">
          <div className="col-span-4 space-y-8">
            <div>
              <SubHeader text="Jobba med oss" theme="light" />
            </div>
            <div className="">
              <p>
                Vår framgång sitter i våra medarbetare. Det är summan i alla
                våra medarbetares engagemang, idéer, driv och känsla för service
                som gör vardagen enklare för våra kunder. Känner du igen dig i
                orden, trygghet, kvalitet &amp; omtanke och har det som krävs
                för att skapa kundnöjdhet utöver det vanliga? Vill du växa och
                ta ett stort eget ansvar och gå till ett roligt och varierande
                jobb? Då kan du vara vår nästa hjälte!
              </p>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 flex flex-row gap-16 items-center p-4">
            <div className="flex-1 p-4">
              <StaticImage src="../../images/gasell.png" />
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
