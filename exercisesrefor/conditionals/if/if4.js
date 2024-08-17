/*
    4 - Verifique se um número é par ou ímpar.
    Escreva um programa que leia um número e use uma estrutura  if/else para verificar se o número é par ou ímpar. 
    Imprima uma mensagem apropriada.
*/

const prompt = require('prompt-sync')()

console.log('Vamos verificar se o número é par ou ímpar')

let value = Number(prompt('Insira um número: '))

if (value !== 0) {
  if (value % 2 == 0) {
    console.log(`\n${value} é par.`)
  } else {
    console.log(`\n${value} é ímpar.`)
  }
} else {
  console.log('O número é zero.')
}
