import React from "react"
import SectionHeader from "../common/SectionHeader"
import { useStaticQuery, graphql } from "gatsby"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import icon from "../../images/icon.svg"

export default function Location() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 40 }) {
        id
        harFinnsVi {
          rubrikLocation
          textLocation
        }
      }
    }
  `)
  const { rubrikLocation, textLocation } = data.wpPage.harFinnsVi

  return (
    <div className="bg-white">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8 py-16 space-y-4 relative z-10">
        <div>
          <SectionHeader text="Här finns vi" theme="dark" />
        </div>

        <div className="flex  flex-col xl:flex-row gap-4 md:gap-8 my-8 w-full">
          <div className="w-full flex flex-col justify-center space-y-8 text-xl">
            <p className="text-3xl md:text-7xl font-bold">{rubrikLocation}</p>
            <div
              dangerouslySetInnerHTML={{ __html: textLocation }}
              className="wp-content"
            />
          </div>

          <div className="w-full  h-[60vh] md:h-[60vh] ">
            <Map />
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

export function Map() {
  if (typeof window !== "undefined") {
    var myIcon = L.icon({
      iconUrl: icon,
      iconSize: [30, 30],
      iconAnchor: [-5, 30],
      popupAnchor: [-0, -0],
    })
  }
  return (
    <>
      {useHasMounted && (
        <MapContainer
          center={[56.2524172, 12.8313749]}
          zoom={7}
          style={{ height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/olleburlin/cl5cb3w1j002714p9ezml25vd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib2xsZWJ1cmxpbiIsImEiOiJjazM2MzJpamkwMzQ1M2xubmd0d2kxODByIn0.5vf54qq-TkiPa6aJqb7oEQ"
          />
          <Marker position={[55.8794931, 12.8108199]} icon={myIcon}>
            <Popup color="#ff12aa">Landskrona</Popup>
          </Marker>
          <Marker position={[55.7049742, 13.162891]} icon={myIcon}>
            <Popup>Lund</Popup>
          </Marker>
          <Marker position={[56.4213133, 12.7259636]} icon={myIcon}>
            <Popup>Båstad</Popup>
          </Marker>
          <Marker position={[56.2523696, 12.8314608]} icon={myIcon}>
            <Popup>Ängelholm</Popup>
          </Marker>
          <Marker position={[56.1996493, 12.5487229]} icon={myIcon}>
            <Popup>Höganäs</Popup>
          </Marker>
          <Marker position={[56.0345838, 12.6626058]} icon={myIcon}>
            <Popup>Helsingborg</Popup>
          </Marker>
          <Marker position={[56.0345838, 12.6626058]} icon={myIcon}>
            <Popup>Helsingborg</Popup>
          </Marker>
          <Marker position={[56.0826133, 12.9093504]} icon={myIcon}>
            <Popup>Bjuv</Popup>
          </Marker>
          <Marker position={[56.1359932, 13.1367149]} icon={myIcon}>
            <Popup>Klippan</Popup>
          </Marker>
          <Marker position={[55.9127912, 13.0948593]} icon={myIcon}>
            <Popup>Svalöv</Popup>
          </Marker>
          <Marker position={[55.8385498, 13.2839836]} icon={myIcon}>
            <Popup>Eslöv</Popup>
          </Marker>
          <Marker position={[55.7599054, 12.9838576]} icon={myIcon}>
            <Popup>Löddeköpinge</Popup>
          </Marker>
          <Marker position={[55.7933163, 13.0982059]} icon={myIcon}>
            <Popup>Kävlinge</Popup>
          </Marker>
          <Marker position={[55.6772602, 13.0581108]} icon={myIcon}>
            <Popup>Lomma</Popup>
          </Marker>
          <Marker position={[55.722737, 13.0061152]} icon={myIcon}>
            <Popup>Bjärred</Popup>
          </Marker>
          <Marker position={[55.6489921, 13.1659827]} icon={myIcon}>
            <Popup>Staffanstorp</Popup>
          </Marker>
          <Marker position={[55.6398118, 13.065406]} icon={myIcon}>
            <Popup>Arlöv</Popup>
          </Marker>
          <Marker position={[55.5701485, 12.9459336]} icon={myIcon}>
            <Popup>Malmö</Popup>
          </Marker>
          <Marker position={[55.474128, 13.2554492]} icon={myIcon}>
            <Popup>Svedala</Popup>
          </Marker>
          <Marker position={[55.436952, 12.9042726]} icon={myIcon}>
            <Popup>Vellinge</Popup>
          </Marker>
          <Marker position={[55.3769065, 13.1283693]} icon={myIcon}>
            <Popup>Trelleborg</Popup>
          </Marker>
          <Marker position={[55.4806905, 13.4890545, 14]} icon={myIcon}>
            <Popup>Skurup</Popup>
          </Marker>
          <Marker position={[55.4347913, 13.7992975]} icon={myIcon}>
            <Popup>Ystad</Popup>
          </Marker>
          {/* <Marker position={[56.6706811, 12.8280381]} icon={myIcon}>
            <Popup>Halmstad</Popup>
          </Marker> */}
          {/* <Marker position={[56.8985315, 12.4604954]} icon={myIcon}>
            <Popup>Falkenberg</Popup>
          </Marker> */}
          {/* <Marker position={[57.1094122, 12.2177269]} icon={myIcon}>
            <Popup>Varberg</Popup>
          </Marker> */}
        </MapContainer>
      )}
    </>
  )
}
