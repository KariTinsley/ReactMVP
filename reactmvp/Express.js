const express = require('express');

const app = express();
let port = 4000;




app.get('/PokemonMVP', (req, res, next)=> {
const api = fetch(`https://pokeapi.co/api/v2/pokemon/`, {
  credentials: 'omit',
  headers: { 'Content-Type': 'application/json' },
  method: 'GET',
})

  .then((res) => res.json(res))
  .then((res) => console.log('Response from server', res));
})



app.get('/PokemonMVP/1', (req, res, next)=> {
  const api = fetch(` https://pokeapi.co/api/v2/pokemon/pikachu`, {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  })
  
    .then((res) => res.json(res))
    .then((res) => console.log('Response from server', res));
  })
  
  

app.listen(port, function () {
    //console.log('It works');
    console.log('Listening on port', port);
})

