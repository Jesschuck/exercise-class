/*
    9 - Imprima um padrão de estrela decrescente
    Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.
    Dica: Utilize dois loops, um dentro do outro.
*/

const prompt = require('prompt-sync')()

console.log('Vamos imprimir um padrão de estrela decrescente')

let lines = Number(prompt('Insira o número de linhas para o padrão: '))

do {
  let stars = lines
  let pattern = ''

  do {
    pattern += '*'
    stars--
  } while (stars > 0)

  console.log(pattern)

  lines--
} while (lines > 0)
