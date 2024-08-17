/*
    7 - Conte o número de dígitos de um número
    Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido 
    (por exemplo, 12345 tem 5 dígitos).
    Dica: Use operações de divisão para reduzir o número até que ele seja zero.
*/

const prompt = require('prompt-sync')()

console.log('Vamos contar o número de dígitos de um número')

let value = Number(prompt('Insira uma série de números: '))
let valueCount = 0

do {
  valueCount++
  value = Math.floor(value / 10)
} while (value > 0)

console.log(`O número de dígitos é: ${valueCount}`)
