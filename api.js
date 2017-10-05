const mongoose = require( 'mongoose' )

mongoose.connect( 'mongodb://localhost/exemploapi', { 'useMongoClient': true } )

const getmoeda = ( Model ) => ( cotacao ) => ( query ) => 
  Model.findOne( query ).exec()

module.exports = ( Model ) => console.log('oi', Model)

// ( {
//   getmoeda: getmoeda( Model )
// } )
