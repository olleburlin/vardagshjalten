import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../common/Button"
import SectionHeader from "../common/SectionHeader"

export default function Kampanj() {
  return (
    <div className="bg-white">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8 py-8 md:py-16 space-y-4 ">
        <div className="flex  flex-col lg:flex-row items-start gap-8 md:gap-16 my-8 w-full">
          <div className="w-full lg:w-1/2 order-last lg:order-first">
            {" "}
            <StaticImage
              src="../../images/hund.jpeg"
              quality={70}
              className="h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center  text-xl">
            <div className="lg:-mt-8">
              <SectionHeader text="Kampanjerbjudande" theme="dark" />
            </div>
            <div className="space-y-4 lg:space-y-8">
              <div className="text-3xl lg:text-7xl font-bold leading-none">
                <div className="leading-snug">
                  Dags att flytta? <br />
                  Vi hjälper dig!
                </div>
              </div>
              <div className="space-y-4">
                <p>Just nu erbjuder vi 10% rabatt på flyttstädning.</p>
                <p>
                  Inför en flytt har du ofta fullt upp med alla bestyr och de
                  flesta vill inte lägga ner åtskilliga timmars arbete på
                  städning när man har ett nytt hem att ta hand om. Det ställs
                  höga krav på flyttstädning. Låt oss hjälpa dig och ta hand om
                  städningen. Du spar både tid och bekymmer och med RUT–avdraget
                  blir det inte så kostsamt. Naturligtvis har du garanti på
                  utfört arbete. Personalen från Vardagshjälten har med sig allt
                  material de behöver, så det är inget du behöver tänka på.
                </p>
                <p>
                  Vi på Vardagshjälten lämnar alltid garanti efter oss som
                  gäller i 24 timmar efter städtillfället. Alla hushållsnära
                  tjänster ingår i skattereduktionen som innebär att ni alltid
                  endast betalar 50 % av kostnaderna.
                </p>
              </div>
              <div>
                <Button text="Få offert" url="/offert" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  * Alla priser är beräknade efter rutavdrag. Erbjudandet kan
                  inte kombineras med andra rabatter eller erbjudanden. Du
                  behöver boka erbjudandet senast 31 oktober 2022.
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
