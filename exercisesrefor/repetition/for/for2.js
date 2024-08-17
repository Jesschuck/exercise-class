/*
    2 - Verifique se um número é primo
    Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. 
    Imprima "É primo" ou "Não é primo".
*/

const prompt = require('prompt-sync')()

let numberP = Number(prompt('Digite um número: '))
let isPrime = true

if (numberP <= 1) {
  isPrime = false
} else {
  for (let i = 2; i < numberP; i++) {
    if (numberP % i === 0) {
      isPrime = false
      break
    }
  }
}

if (isPrime) {
  console.log(`${numberP} é primo.`)
} else {
  console.log(`${numberP} não é primo.`)
}
