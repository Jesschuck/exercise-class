/* 
    7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')()

console.log('Vamos calcular o valor total da sua compra')
let applesBought = parseFloat(prompt('Digite quantas maçãs foram compradas: '))

let total

if (applesBought !== 0) {
  if (applesBought < 12) {
    total = applesBought * 0.3
  } else {
    total = applesBought * 0.25
  }
  console.log(`\nO total da sua compra ficou: R$ ${total.toFixed(2)}`)
} else {
  console.log('Nenhuma maçã comprada.')
}
