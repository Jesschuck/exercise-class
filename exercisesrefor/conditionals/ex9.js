/* 
    9 - Verifique a faixa etária de uma pessoa
        Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
            Criança: 0 - 12 anos
            Adolescente: 13 - 17 anos
            Adulto: 18 - 59 anos
            Idoso: 60 anos ou mais
        Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.
*/

const prompt = require('prompt-sync')()

console.log('Vamos verificar a sua faixa etária')

let age = Number(prompt('Insira a sua idade: '))
let category

if (age > 0 && age <= 12) {
  category = 'Criança'
} else if (age >= 13 && age <= 17) {
  category = 'Adolescente'
} else if (age >= 18 && age <= 59) {
  category = 'Adulto'
} else if (age >= 60) {
  category = 'Idoso'
} else {
  category = 'Idade inválida'
}

switch (category) {
  case 'Criança':
    console.log(`\n${age} anos você é uma Criança`)
    break
  case 'Adolescente':
    console.log(`\n${age} anos você é um Adolescente`)
    break
  case 'Adulto':
    console.log(`\n${age} anos você é um Adulto`)
    break
  case 'Idoso':
    console.log(`\n${age} anos você é um Idoso`)
    break
  default:
    console.log('\nIdade inválida.')
    break
}
