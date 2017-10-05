const Model = require('./model');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exemploapi',{'useMongoClient':true});

const getmoeda = (cotacao) => ( query ) =>
	Model.findOne( query ).exec()


module.exports = {
	getmoeda
};
