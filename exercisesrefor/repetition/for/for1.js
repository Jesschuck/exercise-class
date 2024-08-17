/*
    1 - Imprima a sequência de Fibonacci até o 10º termo
    Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
    Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.
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
