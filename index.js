const express = require( 'express' )
const api = require( './api/api' )
const app = express()

const BRL = api.getmoeda( 'brl' )

app.get( '/', async function ( req, res ) {
	// aqui deveria imprimir por exemplo { 'nome':'brl', valor: 1 }
	const query = {}
  let cot = await BRL(query)
  // só pro exemplo
  res.send( cot )
} )

app.listen( 3000, function () {
  console.log( 'Example app listening on port 3000!' )
} )
