/*
    11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
    utilizando um loop for
*/

const prompt = require('prompt-sync')()

console.log('Digite cinco números que irei te fornecer a soma total deles!')

let total = 0

for (let i = 1; i <= 5; i++) {
  let value = Number(prompt(`Insira o número ${i}: `))
  total += value
}

console.log(`\nA soma total dos números é: ${total}`)
