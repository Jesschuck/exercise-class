/* 
    7 - Calcule o valor de uma expressão matemática simples
    Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado 
    da operação. Imprima o resultado.
*/

const prompt = require('prompt-sync')()

let value1 = Number(prompt('Insira o primeiro número: '))
let value2 = Number(prompt('Insira o segundo número: '))

let option = prompt('Escolha uma operação (+, -, *, /): ')

switch (option) {
  case '+':
    console.log(`\n${value1} + ${value2} é igual a: `, value1 + value2)
    break

  case '-':
    console.log(`\n${value1} - ${value2} é igual a: `, value1 - value2)
    break

  case '*':
    console.log(`\n${value1} * ${value2} é igual a: `, value1 * value2)
    break

  case '/':
    if (value2 === 0) {
      console.log('\nErro: divisão por zero.')
    } else {
      console.log(`\n${value1} / ${value2} é igual a: `, value1 / value2)
    }
    break

  default:
    console.log('\nOperador inválido. Escolha um desses: +, -, *, /')
    break
}
