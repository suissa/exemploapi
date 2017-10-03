const express = require('express');
const api = require('./api/api');
const app = express();

app.get('/', async function (req, res) {
	//aqui deveria imprimir por exemplo {'nome':'brl', valor: 1}
	let cot = await api.getmoeda('brl');
	//só pro exemplo
	res.send(cot);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

