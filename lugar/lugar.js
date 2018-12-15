const axios = require('axios');

const getLugarLatLng  = async (direccion) => {
      
   //escapar caracteres a una url amigable
   let encodeUrl = encodeURI(direccion);

   let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)
   if(resp.data.status === 'ZERO_RESULTS'){
      throw new Error(`No hay resultados para la ciudad ${direccion}`);
   }
   
   let location = resp.data.results[0];
   let coord = location.geometry.location;

   return {
      direccion: location.formatted_address,
      lat: coord.lat,
      lng: coord.lng
   }
}

module.exports = {
   getLugarLatLng
}


