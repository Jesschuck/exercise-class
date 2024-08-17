/*
    6 - Verifique se um número é palíndromo
    Escreva um programa que use um loop while para verificar se um número fornecido é um palíndromo. 
    Um número é palíndromo se ele é igual ao seu reverso.
*/

const prompt = require('prompt-sync')()

console.log('Vamos verificar se o número é palíndromo')

let value = Number(prompt('Insira um número: '))
let originalValue = value
let reversedValue = 0

while (value > 0) {
  // pega o último digito
  let digit = value % 10
  // adiciona ao número invertido
  reversedValue = reversedValue * 10 + digit
  //remove o último digito
  value = Math.floor(value / 10)
}

if (originalValue === reversedValue) {
  console.log(`\nO ${originalValue} é um palíndromo: ${reversedValue}`)
} else {
  console.log(`\nO ${originalValue} não é um palíndromo: ${reversedValue}`)
}
