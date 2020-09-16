import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

function Map(props) {
  const mapRef = useRef(); 
  mapboxgl.accessToken =
    "pk.eyJ1Ijoib21lcmJrazA2IiwiYSI6ImNrNThqeGRxbDBlcDIzam11eDIzaDRsamYifQ.P8GSW1O3dRj59x7v9l7FqA";

  const { center, zoom } = props;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center, // starting position [lng, lat]
      zoom:12, // starting zoom
    });
    var marker = new mapboxgl.Marker().setLngLat(center).addTo(map);
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
}

export default Map;
