/* 
    10 - Calcule o IMC e determine a categoria
    Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) 
    e use uma estrutura if/else para determinar a categoria:
            Abaixo do peso: IMC < 18.5
            Peso normal: IMC 18.5 - 24.9
            Sobrepeso: IMC 25 - 29.9
            Obesidade grau I: IMC 30 - 34.9
            Obesidade grau II: IMC 35 - 39.9
            Obesidade grau III: IMC >= 40
    Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).
*/

const prompt = require('prompt-sync')()

console.log('Vamos calcular o seu IMC!')

let peso = parseFloat(prompt('Informe o seu peso (kg): '))
let altura = parseFloat(prompt('Informe a sua altura (m): '))

if (peso <= 0 || altura <= 0) {
  console.log('Peso e altura devem ser maiores que zero.')
} else {
  let imc = peso / (altura * altura)

  if (imc < 18.5) {
    console.log(`\nO seu IMC é ${imc.toFixed(2)}: Abaixo do peso`)
  } else if (imc >= 18.5 && imc < 25) {
    console.log(`\nO seu IMC é ${imc.toFixed(2)}: Peso normal`)
  } else if (imc >= 25 && imc < 30) {
    console.log(`\nO seu IMC é ${imc.toFixed(2)}: Sobrepeso`)
  } else if (imc >= 30 && imc < 35) {
    console.log(`\nO seu IMC é ${imc.toFixed(2)}: Obesidade grau I`)
  } else if (imc >= 35 && imc < 40) {
    console.log(`\nO seu IMC é ${imc.toFixed(2)}: Obesidade grau II`)
  } else {
    console.log(`\nO seu IMC é ${imc.toFixed(2)}: Obesidade grau III`)
  }
}
