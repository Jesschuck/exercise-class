/*
    12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
    10) utilizando um loop for.
*/

const prompt = require('prompt-sync')()

console.log('Digite um número que te fornecerei a tabuada dele')
let value = Number(prompt('\nInsira um número: '))

for (let i = 0; i <= 10; i++) {
  console.log(`${value} * ${i} =`, value * i)
}
