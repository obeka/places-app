const axios = require('axios')

async function getCoordsForAddress() {
     return {
        lat: 40.7884474,
        lng: -70.9871516,
      }
}

module.exports =  {getCoordsForAddress}