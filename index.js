const express = require('express');
const api = require('./api/api');
const app = express();

app.get('/', function (req, res) {
	//aqui deveria imprimir por exemplo {'nome':'brl', valor: 1}
	let cot = api.getmoeda('brl');
	//só pro exemplo
	res.send(cot);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

