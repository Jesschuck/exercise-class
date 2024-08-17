/*
    3 - Imprima um triângulo de números
    Escreva um programa que use um loop for para imprimir um triângulo de números.
*/

const prompt = require('prompt-sync')()

let numberT = Number(prompt('Digite o número de linhas para o triângulo: '))

for (let i = 1; i <= numberT; i++) {
  let line = ''
  for (let j = 1; j <= i; j++) {
    line += j + ' '
  }
  console.log(line)
}
