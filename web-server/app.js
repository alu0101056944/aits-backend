
'use strict';

import express from 'express';
import {fileURLToPath} from 'url';
import cors from 'cors';

// Create and serve http server
function main() {
  const app = express();
  const PORT = 8080;
  app.set('port', PORT);
  app.use(cors());

  app.listen(PORT, '127.0.0.1', () => {
        console.log('Server listening at 0.0.0.0:' + PORT);
      });

  const RESPONSE_CONTENT = `
      {"bienes": [
        {
            "nombre": "CASA ALVARADO BRACAMONTE",
            "antecedentes": "El Capitán General de Tenerife don Diego de Alvarado Bracamonte edificó esta casa entre 1624 y 1631",
            "tipo": {
                "arquitectura": "CIVIL Y DOMÉSICA",
                "época":"Anterior al s. XX"
            },
            "img": "http://gestorpatrimoniocultural.cicop.com/imgFicha/17_1_2021_0_49_40.png",
            "localizacion":{
                "lat": "28°29'21.2 N",
                "long": "16°18'51.5 W"
                }
            
           },
           {
            "nombre": "CASA ALVAREZ DE ABREU",
            "antecedentes": "La vivienda tiene un balcón y da esquina al callejón que conduce al sitio denominado “Juego de los Bolos”, perteneció a D.Santiago Álvarez de Abreu, veedor general de la gente de guerra",
            "tipo": {
                "arquitectura": "CIVIL Y DOMÉSICA",
                "época":"Anterior al s. XX"
            },
            "img": "http://gestorpatrimoniocultural.cicop.com/imgFicha/19_1_2021_22_55_28.png",
            "localizacion":{
                "lat": "28°29'26.6 N",
                "long": "16°19'12.7 W"
                }
            
           },
           {
            "nombre": "CASA ALONSO BRITO",
            "antecedentes": "La Casa Alonso Brito es una de las más antiguas, de finales del siglo XVII, con una sencilla fachada en la calle San Agustín y un pequeño balcón muy rudimentario en la calle Viana",
            "tipo": {
                "arquitectura": "CIVIL Y DOMÉSICA",
                "época":"Anterior al s. XX"
            },
            "img": "http://gestorpatrimoniocultural.cicop.com/imgFicha/17_1_2021_0_49_40.png",
            "localizacion":{
                "lat": "28°29'21.2 N",
                "long": "16°18'51.5 W"
                }
            
           }
      
      ]
      }
    `;

  app.get('/', (request, response) => response.send(RESPONSE_CONTENT));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
