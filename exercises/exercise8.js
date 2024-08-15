/* 
    8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente.
*/

const prompt = require('prompt-sync')()

let value1 = Number(prompt('Digite o primeiro valor: '))
let value2 = Number(prompt('Digite o primeiro valor: '))

function compareNumbers(a, b) {
  if (a !== b) {
    if (a < b) {
      console.log(`${a}, ${b}`)
    } else {
      console.log(`${b}, ${a}`)
    }
  } else {
    console.log('Os números não podem ser iguais.')
  }
}

compareNumbers(value1, value2)
