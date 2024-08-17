/* 
    4 - Calcule o fatorial de um número
    Escreva um programa que use um loop while para calcular o fatorial de um número fornecido.
*/

const prompt = require('prompt-sync')()

console.log('Calculo de fatorial')

let value = Number(prompt('Insira um número: '))
let factorial = 1

let a = value

while (a > 0) {
  factorial = a * factorial
  a--
}

console.log(`\nO fatorial do ${value} é ${factorial}`)
