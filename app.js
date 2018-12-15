
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
.option({
   direccion: {
      alias: 'd',
      desc: 'Direccion de la ciudad para obtener el clima',
      demand: true
   }
}).argv;

//console.log(argv.direccion);

let getInfo = async (direccion) => {
   
   try{
      
      let coords = await lugar.getLugarLatLng(direccion);
      let tempe = await clima.getClima(coords.lat, coords.lng);
      return `El clima en ${coords.direccion} es de ${tempe} grados.`;
   
   } catch(e){
      return `No se pudo determinar el clima en ${direccion}`;
   }
   
} 


getInfo(argv.direccion)
.then(clima => console.log(clima))
.catch(error => console.log(error));

// lugar.getLugarLatLng(argv.direccion)
//    .then(resp => {
//       console.log(resp);
//    })
//    .catch(e => console.log(e));

// clima.getClima(2,2)
//    .then(temp => console.log(temp))
//    .catch(e => console.log(e));