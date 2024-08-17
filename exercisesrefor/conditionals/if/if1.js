/*
    1 - Verifique se um número é positivo, negativo ou zero
    Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo, negativo ou zero. 
    Imprima uma mensagem apropriada para cada caso.
*/

const prompt = require('prompt-sync')()

console.log('Vamos verificar se um número é positivo, negativo ou zero')

let value = Number(prompt('Insira um número: '))

if (value > 0) {
  console.log(`\n${value} é um número positivo!`)
} else if (value < 0) {
  console.log(`\n${value} é um número negativo!`)
} else {
  console.log('\nO número é zero.')
}
