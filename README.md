# 4. Typescript & API

## Descripció - Enunciat de l'exercici

L'objectiu de l'exercici és crear una web que mostri acudits obtinguts d'una API, així com informació sobre el temps que fa a Barcelona, també des d'una API, i fer-ho amb typescript.


## Tecnologies Utilitzades

- Node.js
- Vite
- Jest
- Tailwindcss

## Requisits

- Node.js

## Instal·lació

- Clona aquest repositori: -> git clone https://github.com/gerard-asuncion/sprint-4-typescript-api.git
- Accedeix al directori del projecte: cd sprint-4-typescript-api
- Instal·la les dependències: 
    1. npm install
    2. pnpm install

### https://openweathermap.org/api

- Aquesta API requereix una clau d'accés, que per motius de seguretat no està pujada al repositori de GitHub. 
- S'haurà d'utilitzar una clau pròpia (aquesta API és gratuita dins d'un límit de peticions).
- S'ofereixen dues maneres d'utilitzar la clau: 
    1. A través de l'arxiu config.ts a la carpeta src, l'únic que cal fer és canviar el nom de config.demo.ts a config.ts, i enganxar la clau dins d'aquest arxiu. És important no escriure-la abans de canviar el nom de l'arxiu, perquè config.demo.ts sí que s'inclou al repositori.
    2. A través del backend. Aquesta opció és una mica més complicada però té l'avantatge que la clau no apareixerà ni tan sols al navegador a l'executar la pàgina. No obstant, el projecte està actualment configurat per funcionar amb l'opció 1 (config.ts), caldria fer algunes modificacions en la funció getWeather() per tal que faci el fetch del backend i no de l'API. També és necessari executar l'arxiu de backend amb "node index.js" a la terminal. 
    Per últim, si s'escull aquesta opció, caldrà crear l'arxiu .env a la carpeta de backend, i escriure-hi la clau de la següent manera:
    WEATHER_API_KEY=ESCRIURE_AQUÍ_LA_CLAU sense cap espai ni cometes.

## Execució

Si es vol executar el jest, caldrà escriure a la terminal: npm test.

## Contribucions

Les contribucions són benvingudes! Per favor, segueix els següents passos per a contribuir:

Fes un fork del repositori
Crea una nova branca   git checkout -b feature/NovaFuncionalitat
Fes els teus canvis i commiteja'ls:   git commit -m 'Afegeix Nova Funcionalitat'
Puja els canvis a la teva branca:   git push origin feature/NovaFuncionalitat
Fes un pull request