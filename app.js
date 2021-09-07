const miFileRead = require('./index.js').miFileRead; //importar funcionciones de index.js
resolve = require('path').resolve; //declarando metodo para convertir ruta relativa a absoluta
let relativePath = process.argv[2];  //metodo para rescatar ruta indicada en consola 
relativePath = resolve(relativePath); //covertir ruta relativa en absoluta


miFileRead(relativePath)
  .then(file => console.log((relativePath)))
  .catch(err => console.log(err));