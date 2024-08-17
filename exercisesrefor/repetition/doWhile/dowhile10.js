/*
    10 - Encontre o maior divisor comum (MDC) de dois números
    Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) 
    de dois números fornecidos.

    Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença 
    dos dois números até que ambos sejam iguais.
*/

const prompt = require('prompt-sync')()

console.log('Vamos encontrar o MDC de dois números')

let value1 = Number(prompt('Insira o primeiro número: '))
let value2 = Number(prompt('Insira o segundo número: '))

let a = value1
let b = value2

do {
  let temp = b
  b = a % b
  a = temp
} while (b !== 0)

const MDC = a

console.log(`\nO maior divisor comum de ${value1} e ${value2} é: ${MDC}`)
