/* 
    13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.
*/

const prompt = require('prompt-sync')()

let count = 0
let sum = 0

while (true) {
  let value = parseFloat(
    prompt('Insira um número decimal (ou digite 0 para sair): ')
  )

  if (value === 0) {
    break
  }

  sum += value
  count++
}

if (count > 0) {
  let average = sum / count
  console.log(`\nA média aritmética dos números inseridos é: ${average}`)
} else {
  console.log('Nenhum número foi inserido.')
}
