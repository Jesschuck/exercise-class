/*
    15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
    Fibonacci utilizando um loop for.
*/

let firstTerm = 0
let secondTerm = 1

console.log('A sequência de Fibonacci até o 10º termo é:')

for (let i = 1; i <= 10; i++) {
  console.log(firstTerm)

  let nextTerm = firstTerm + secondTerm

  firstTerm = secondTerm
  secondTerm = nextTerm
}
