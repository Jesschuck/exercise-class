/*
    1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
    utilizando uma estrutura de controle if.
*/

const prompt = require('prompt-sync')()

let number1 = Number(prompt('Enter a number: '))

if (number1 !== 0) {
  if (number1 % 2 == 0) {
    console.log(`${number1} is even.`)
  } else {
    console.log(`${number1} is odd.`)
  }
} else {
  console.log('The number is zero.')
}
