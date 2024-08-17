/*
    6 - Verifique o dia da semana
    Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. 
    (1 = Domingo, 2 = Segunda-feira, etc.)
*/

const prompt = require('prompt-sync')()

console.log('Vamos verificar o dia da semana')

let dayOfTheWeek = Number(prompt('Insira um número de 1 a 7: '))

switch (dayOfTheWeek) {
  case 1:
    console.log(`\n${dayOfTheWeek} corresponde ao Domingo`)
    break
  case 2:
    console.log(`\n${dayOfTheWeek} corresponde a Segunda`)
    break
  case 3:
    console.log(`\n${dayOfTheWeek} corresponde a Terça`)
    break
  case 4:
    console.log(`\n${dayOfTheWeek} corresponde a Quarta`)
    break
  case 5:
    console.log(`\n${dayOfTheWeek} corresponde a Quinta`)
    break
  case 6:
    console.log(`\n${dayOfTheWeek} corresponde a Sexta`)
    break
  case 7:
    console.log(`\n${dayOfTheWeek} corresponde ao Sábado`)
    break

  default:
    console.log(
      `\n${dayOfTheWeek} é um número inválido. Por favor, insira um número de 1 a 7.`
    )
    break
}
