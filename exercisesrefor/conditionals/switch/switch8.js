/*
    8 - Verifique a estação do ano
    Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. 
    (1 = Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)
*/

const prompt = require('prompt-sync')()

console.log('Vamos verificar a estação do ano')

let seasonOfTheYear = Number(prompt('Insira um número de 1 a 4: '))

switch (seasonOfTheYear) {
  case 1:
    console.log('\nA estação do ano correspondente é a Primavera')
    break
  case 2:
    console.log('\nA estação do ano correspondente é o Verão')
    break
  case 3:
    console.log('\nA estação do ano correspondente é o Outono')
    break
  case 4:
    console.log('\nA estação do ano correspondente é o Inverno')
    break

  default:
    console.log('\nErro! Digite um número de 1 a 4.')
    break
}
