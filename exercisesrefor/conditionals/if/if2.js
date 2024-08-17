/*
    2 - Verifique se um ano é bissexto
    Escreva um programa que leia um ano e use uma estrutura if para verificar se o ano é bissexto. 
    Um ano é bissexto se for divisível por 4, mas não por 100, exceto se também for divisível por 400. 
    Imprima uma mensagem apropriada.
*/

const prompt = require('prompt-sync')()

console.log('Vamos verificar se o ano é bissexto')

let year = Number(prompt('Insira um ano: '))

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} é um ano bissexto`)
} else {
  console.log(`${year} não é um ano bissexto`)
}
