/*
    14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
    utilizando um loop for ou while
*/

const prompt = require('prompt-sync')()

console.log('Calculo de fatorial')

let value = Number(prompt('Insira um número: '))
let factorial = 1

for (let i = value; i > 1; i--) {
  factorial *= i
}

console.log(`\nO fatorial do ${value} é ${factorial}`)
