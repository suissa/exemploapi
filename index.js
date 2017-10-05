const express = require( 'express' )
const app = express()

const Model = require( './api/model' )
console.log('------------------------------------');
// console.log(Model);
console.log('------------------------------------');
const api = require( './api/api' )( Model )

const BRL = api.getmoeda( 'brl' )

app.get( '/', async function ( req, res ) {
  const query = {}
  let cot = await BRL( query )
  res.send( cot )
} )

app.listen( 3000, function () {
  console.log( 'Example app listening on port 3000!' )
} )
