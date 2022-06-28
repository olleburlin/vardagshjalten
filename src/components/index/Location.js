import React from "react"
import SectionHeader from "../common/SectionHeader"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default function Location() {
  if (typeof window !== "undefined") {
    return (
      <div className="bg-gray-100">
        <div className=" mx-auto container px-4 md:px-8 py-8 md:py-16">
          <SectionHeader text="Här finns vi" />

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 my-8 w-full">
            <div className="flex flex-col justify-center space-y-8 text-xl">
              {/* <h2>Vi utför våra tjänster i följande orter med omnejd</h2> */}
              <p className="font-bold">
                Vi brukar säga att vi är verksamma på den Skånska västkusten,
                någonstans mellan Båstad-Trelleborg med några avstickare mot
                Österlen. Vårt huvudkontor ligger i Landskrona och vi är
                verksamma i över 35 orter i Skåne.
              </p>
              <p>
                Båstad, Ängelholm, Höganäs, Helsingborg, Bjuv, Klippan,
                Landskrona, Svalöv, Eslöv, Löddeköpinge, Kävlinge, Lomma,
                Bjärred, Lund, Staffanstorp, Arlöv, Svedala, Malmö, Vellinge,
                Trelleborg, Skurup &amp; Ystad.
              </p>
            </div>
            <div className="bg-primary">
              <div className="w-full grayscale">
                {useHasMounted && (
                  <MapContainer
                    center={[55.8794931, 12.8108199]}
                    zoom={8}
                    style={{ height: "70vh" }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[55.8794931, 12.8108199]}>
                      <Popup>Landskrona</Popup>
                    </Marker>
                    <Marker position={[55.7049742, 13.162891]}>
                      <Popup>Lund</Popup>
                    </Marker>
                    <Marker position={[56.4213133, 12.7259636]}>
                      <Popup>Båstad</Popup>
                    </Marker>
                  </MapContainer>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}
