import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import React from 'react';



const MapIntegrate = () => {
  const center = [24.859221858904903, 67.15474086822134]

  return (
    <MapContainer center={center} zoom={10} style={{ width: '100vw', height: '100vh' }}>
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=oFcV5rC5g3g8R4FqvoIG"
      />
      <Marker draggable={true} position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapIntegrate
