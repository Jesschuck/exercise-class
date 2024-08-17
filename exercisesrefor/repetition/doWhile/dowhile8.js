/*
    8 - Calcule a soma dos dígitos de um número
        Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido 
        (por exemplo, a soma dos dígitos de 1234 é 10).
    Dica: Use operações de módulo para extrair os dígitos e depois some-os.
*/

const prompt = require('prompt-sync')()

console.log('Vamos somar os números digitados')

let value = Number(prompt('Insira uma série de números: '))
let valueSum = 0

do {
  valueSum += value % 10
  value = Math.floor(value / 10)
} while (value > 0)

console.log(`\nA somas dos números é: ${valueSum}`)
