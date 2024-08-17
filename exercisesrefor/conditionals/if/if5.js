/*
    5 - Verifique a categoria de um nadador
    Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador 
    de acordo com a idade:
            Infantil A: 5 - 7 anos
            Infantil B: 8 - 10 anos
            Juvenil A: 11 - 13 anos
            Juvenil B: 14 - 17 anos
            Adulto: 18 anos ou mais
*/

const prompt = require('prompt-sync')()

console.log('Vamos verificar a sua categoria')

let age = Number(prompt('Insira a sua idade: '))

if (age >= 5 && age <= 7) {
  console.log(`\n${age} anos. A sua categoria é Infantil A`)
} else if (age >= 8 && age <= 10) {
  console.log(`\n${age} anos. A sua categoria é Infantil B`)
} else if (age >= 11 && age <= 13) {
  console.log(`\n${age} anos. A sua categoria é Juvenil A`)
} else if (age >= 14 && age <= 17) {
  console.log(`\n${age} anos. A sua categoria é Juvenil B`)
} else if (age >= 18) {
  console.log(`\n${age} anos. A sua categoria é Adulto`)
} else {
  console.log('\nIdade inválida')
}
