const Cambio = require('./model');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exemploapi',{'useMongoClient':true});

function api(){

	this.getmoeda = (cotacao)=>{
		//nessa função teria que ter tipo um res.json
		//tipo, o programa vai da findOne({'nome':cotacao}) e salvar 
		//json, sei lá , x por exemplo;
		//ai o resultado disso, ou seja, o json de resposta vai voltar pro express 
		//return res.json(x);

		//add uma linha só pra funcionar o json, pode desconsiderar/apagar
		return {'result':cotacao};
	};
}

module.exports = new api;
