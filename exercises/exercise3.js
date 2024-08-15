/*
    3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
    "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const prompt = require('prompt-sync')()

let classificationNumber = Number(prompt('Enter a grade from 0 to 10: '))

if (classificationNumber >= 0 && classificationNumber <= 10) {
  if (classificationNumber >= 6) {
    console.log(`${classificationNumber} está aprovado.`)
  } else if (classificationNumber === 5) {
    console.log(`${classificationNumber} está em recuperação.`)
  } else {
    console.log(`${classificationNumber} está reprovado.`)
  }
} else {
  console.log('Nota inválida! Por favor, insira um número entre 0 e 10.')
}
