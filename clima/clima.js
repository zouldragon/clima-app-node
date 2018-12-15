const axios = require('axios');

const getClima = async (lat,lng) => {

   let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f3eafb764cf489e50fd24f8a1832b28f`);
   let temp =resp.data.main.temp;
   // console.log("Temperatura: ", temp.temp);
   // console.log("Temperatura minima: ", temp.temp_min);
   // console.log("Temperatura maxima: ", temp.temp_max);

   return temp;
}

module.exports = {
   getClima
}

