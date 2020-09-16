const axios = require("axios");

const API_KEY =
  "pk.eyJ1Ijoib21lcmJrazA2IiwiYSI6ImNrNThqeGRxbDBlcDIzam11eDIzaDRsamYifQ.P8GSW1O3dRj59x7v9l7FqA";

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${API_KEY}`
  );
  const data = response.data;
  const coordinates = data.features[0].geometry.coordinates;
  return {
    lat: coordinates[1],
    lng: coordinates[0],
  };
}

module.exports = { getCoordsForAddress };
