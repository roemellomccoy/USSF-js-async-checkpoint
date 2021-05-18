#!/usr/bin/env node
const fetch = require("node-fetch");
var fs = require('fs');
const yargs = require("yargs");

const options = yargs
  .usage("Usage: -f <file>")
  .option("f", {alias: "file", describe: "A file with pokemon on each line.", type: "string", demandOption: true})
  .argv;

let input = options.file;

var typeArray = [];

function getTypes(input){
  let pokemonInput = fs.readFileSync(fileName, 'utf-8');
  let pokemonArray = pokemonInput.split('\r\n');
  console.log(pokemonArray);

  for(let i = 0; i < pokemonArray.length; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonArray[i]}`)
    .then(res => res.json())
    .then(res => {
      for(let j = 0; j < res.types.length; j++){
        typeArray.push(res.types[j].type.name);
      }
      typeString = typeArray.join(' ');
      let resultString = `${pokemonArray[i]}: ${typeString}`;
      console.log(resultString);
      typeArray = [];
    })

  }
}
