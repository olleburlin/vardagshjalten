import React from "react"
import SectionHeader from "../common/SectionHeader"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default function Location() {
  if (typeof window !== "undefined") {
    return (
      <div className="bg-primary/10">
        <div className="container mx-auto px-4 md:px-8 py-16 space-y-8 md:space-y-16">
          <div>
            <SectionHeader text="Här finns vi" theme="dark" />
          </div>

          <div className="flex md:flex-row flex-col gap-4 md:gap-8 my-8 w-full">
            <div className="w-full md:w-5/12 flex flex-col justify-center space-y-8 text-xl">
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

            <div className="w-full grayscale md:w-7/12">
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
                  <Marker position={[56.2523696, 12.8314608]}>
                    <Popup>Ängelholm</Popup>
                  </Marker>
                  <Marker position={[56.1996493, 12.5487229]}>
                    <Popup>Höganäs</Popup>
                  </Marker>
                  <Marker position={[56.0345838, 12.6626058]}>
                    <Popup>Helsingborg</Popup>
                  </Marker>
                  <Marker position={[56.0345838, 12.6626058]}>
                    <Popup>Helsingborg</Popup>
                  </Marker>
                  <Marker position={[56.0826133, 12.9093504]}>
                    <Popup>Bjuv</Popup>
                  </Marker>
                  <Marker position={[56.1359932, 13.1367149]}>
                    <Popup>Klippan</Popup>
                  </Marker>
                  <Marker position={[55.9127912, 13.0948593]}>
                    <Popup>Svalöv</Popup>
                  </Marker>
                  <Marker position={[55.8385498, 13.2839836]}>
                    <Popup>Eslöv</Popup>
                  </Marker>
                  <Marker position={[55.7599054, 12.9838576]}>
                    <Popup>Löddeköpinge</Popup>
                  </Marker>
                  <Marker position={[55.7933163, 13.0982059]}>
                    <Popup>Kävlinge</Popup>
                  </Marker>
                  <Marker position={[55.6772602, 13.0581108]}>
                    <Popup>Lomma</Popup>
                  </Marker>
                  <Marker position={[55.722737, 13.0061152]}>
                    <Popup>Bjärred</Popup>
                  </Marker>
                  <Marker position={[55.6489921, 13.1659827]}>
                    <Popup>Staffanstorp</Popup>
                  </Marker>
                  <Marker position={[55.6398118, 13.065406]}>
                    <Popup>Arlöv</Popup>
                  </Marker>
                  <Marker position={[55.5701485, 12.9459336]}>
                    <Popup>Malmö</Popup>
                  </Marker>
                  <Marker position={[55.474128, 13.2554492]}>
                    <Popup>Svedala</Popup>
                  </Marker>
                  <Marker position={[55.436952, 12.9042726]}>
                    <Popup>Vellinge</Popup>
                  </Marker>
                  <Marker position={[55.3769065, 13.1283693]}>
                    <Popup>Trelleborg</Popup>
                  </Marker>
                  <Marker position={[55.4806905, 13.4890545, 14]}>
                    <Popup>Skurup</Popup>
                  </Marker>
                  <Marker position={[55.4347913, 13.7992975]}>
                    <Popup>Ystad</Popup>
                  </Marker>
                </MapContainer>
              )}
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
