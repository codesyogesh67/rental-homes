'use client';

import {useState,useEffect} from 'react'
import L from 'leaflet';
import { MapContainer, Marker, TileLayer,Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { getLocations } from "@/actions/get-location"
import dynamic from "next/dynamic"

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl; 
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: number[],
  data: [{
    prop_addr: string,
    prop_city: string,
    prop_state: string,
    prop_zip: string
  }]
}


 


const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';



const Map = ({ data }) => {
  console.log("data",data)

  const position = [43.065820, -73.796870]

  // prop_addr, prop_city, prop_state, prop_zip
  // const { prop_addr, prop_city, prop_state, prop_zip } = data;
  const positions = []


  const center = [43.065820, -73.796870]



 

    return (
      <MapContainer
        center={center as L.LatLngExpression || [51, -0.09]}

        zoom={center ? 8 : 6}
 
        scrollWheelZoom={false}
        className="h-full rounded-lg !z-10"
      >
        <TileLayer
          url={url}
          attribution={attribution}
        />
         {center && (
          <Marker position={center as L.LatLngExpression} />
        )} 
   
        <Marker position={position}>
          {/* {location} */}
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
        </Marker>
      </MapContainer>

    )
  }
 



  


export default Map