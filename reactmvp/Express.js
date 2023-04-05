const express = require('express');


const app = express();
let port = 4000;




app.get('/pokemon', (res,req, next)=>{
fetch('https://pokeapi.co/api/v2/pokemon/')
	.then(response => response.json(response))
	.then(response => console.log(response))
	.catch(err => console.error(err));
})

app.listen(port, function () {
  //console.log('It works');
  console.log('Listening on port', port);
})

