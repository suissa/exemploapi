const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cambioSchema = new Schema({
    nome:  String, //BRL, USD, etc
    valor: Number, // um valor qualquer
});

module.exports = mongoose.model('Cambio', cambioSchema);
