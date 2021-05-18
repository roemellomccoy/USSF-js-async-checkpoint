const fetch = require("node-fetch");
var fs = require('fs');

var typeArray = [];

function getTypes(fileName){
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

// function getTypes(fileName) {
//   let pokemonArray = fs.readFileSync(fileName, `utf-8`)
//   pokemonArray = pokemonArray.split(`\n`);
//   console.log(pokemonArray);

//   for (let i = 0; i < pokemonArray.length; i++) {
//     let typeArray = [];
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonArray[i]}`)
//       .then(res => res.json())
//       .then(res => {
//         for (let j = 0; j < res.types.length; j++) {
//           typeArray.push(res.types[j].type.name)
//         }
//         let resultStr = `${pokemonArray[i]}: ${typeArray.join(`, `)}`
//         console.log(resultStr)
//       })
//     }
//   }


getTypes("C:/Users/roeme/OneDrive/Documents/Cohort/USSF-js-async-checkpoint/input.txt");
