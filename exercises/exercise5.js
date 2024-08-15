/* 
    5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
    determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
    utilizando if-else.

    Menor que 18,5	Magreza	
    Entre 18,5 e 24,9	Normal
    Entre 25,0 e 29,9	Sobrepeso	
    Entre 30,0 e 39,9	Obesidade	
*/

const prompt = require('prompt-sync')()

console.log('Vamos calcular o seu IMC! ')
let peso = parseFloat(prompt('Informe o seu peso: '))
let altura = parseFloat(prompt('Informe a sua altura: '))

let imc = peso / (altura * altura)

if (imc < 18.5) {
  console.log(`O seu IMC ${imc.toFixed(2)} é de baixo peso`)
} else if (imc >= 18.5 && imc < 25) {
  console.log(`O seu IMC ${imc.toFixed(2)} é peso normal`)
} else if (imc >= 25 && imc < 30) {
  console.log(`O seu IMC ${imc.toFixed(2)} é sobrepeso`)
} else if (imc >= 30 && imc < 40) {
  console.log(`O seu IMC ${imc.toFixed(2)} é obesidade`)
} else {
  console.log('Valor inválido.')
}
