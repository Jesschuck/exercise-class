/*
    5 - Inverta os dígitos de um número
    Escreva um programa que use um loop while para inverter os dígitos de um número fornecido.
*/

const prompt = require('prompt-sync')()

console.log('Vamos inverter o número digitado')

let value = Number(prompt('Insira um número: '))
let reversedValue = 0

while (value > 0) {
  // pega o último digito
  let digit = value % 10
  // adiciona ao número invertido
  reversedValue = reversedValue * 10 + digit
  //remove o último digito
  value = Math.floor(value / 10)
}

console.log(`\nO reverso é ${reversedValue}`)
