const fs = require('fs'); //libreria para trabajar con archivos
const clc = require('cli-color'); //cambiar color de letras
const path = require('path');

//declaracion de colores a utilizar
const redColor = clc.red.bold;
const cyanColor = clc.cyan;


const miFileRead = (route) => {
  const isDirectory = fs.lstatSync(route).isDirectory();

  return new Promise((resolve, reject) => {  
    if (isDirectory) {
      fs.readdir(route, (err, files) => {
        if (err) {
          reject(redColor('No se puede leer el directorio'))
        }
        files.forEach(file => {
          if (path.extname(file) === '.md') {
            console.log(cyanColor("SE ENCONTRO EL SIGUIENTE ARCHIVO .md:", file));
            resolve(test(file))
          }
        })
      })
    } else {
      fs.readFile(route, 'utf8', (err, data) => {
        if (err) {
          reject(redColor('No se encontro el archivo'))
        }
        if (path.extname(route) !== '.md') {
          reject(redColor('El archivo no es .md'))
        }
        resolve(test(data));
      })
    }
  })
}

function test(data) {
  console.log('aqui')
}

exports.miFileRead = miFileRead;