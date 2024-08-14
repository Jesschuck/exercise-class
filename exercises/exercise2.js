/*
    2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else.
*/

const prompt = require('prompt-sync')()

let age = Number(prompt('Enter an age: '))

if (age > 0 && age <= 12) {
  console.log(`${age} years old is a child.`)
} else if (age > 12 && age <= 17) {
  console.log(`${age} years old is a teenager`)
} else if (age > 17 && age <= 64) {
  console.log(`${age} years old is an adult`)
} else if (age > 64) {
  console.log(`${age} years old is old`)
} else {
  console.log('Invalid age.')
}
