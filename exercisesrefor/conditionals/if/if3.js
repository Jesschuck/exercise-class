/* 
    3 - Calcule a média de três números e determine o conceito
    Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar 
    o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.
    Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.
    A = average > 9
*/

const prompt = require('prompt-sync')()

console.log('Vamos calcular a sua média')

let value1 = parseFloat(prompt('Insira a primeira nota: '))
let value2 = parseFloat(prompt('Insira a segunda nota: '))
let value3 = parseFloat(prompt('Insira a terceira nota: '))
let averageGrade = (value1 + value2 + value3) / 3

if (averageGrade >= 9) {
  console.log(`\nNota A, a sua média foi: ${averageGrade.toFixed(2)}`)
} else if (averageGrade >= 8) {
  console.log(`\nNota B, a sua média foi: ${averageGrade.toFixed(2)}`)
} else if (averageGrade >= 7) {
  console.log(`\nNota C, a sua média foi: ${averageGrade.toFixed(2)}`)
} else if (averageGrade >= 6) {
  console.log(`\nNota D, a sua média foi: ${averageGrade.toFixed(2)}`)
} else if (averageGrade >= 5) {
  console.log(`\nNota E, a sua média foi: ${averageGrade.toFixed(2)}`)
} else {
  console.log(`\nNota F, a sua média foi: ${averageGrade.toFixed(2)}`)
}
