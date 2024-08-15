/* 
     4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
    Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')()

function dolarToReal() {
  let dolarValue = parseFloat(prompt('Digite o valor em Dólares (USD): '))
  const exchangeRate = 5.0

  let realValue = dolarValue * exchangeRate
  console.log(`${dolarValue} dólares é igual a ${realValue} reais.`)
}

function euroToReal() {
  let euroValue = parseFloat(prompt('Digite o valor em Euros (EUR): '))
  const exchangeRate = 6.0

  let realValue = euroValue * exchangeRate
  console.log(`${euroValue} euros é igual a ${realValue} reais.`)
}

function poundsToReal() {
  let poundsValue = parseFloat(prompt('Digite o valor em Libras (GBP): '))
  const exchangeRate = 7.0

  let realValue = poundsValue * exchangeRate
  console.log(`${poundsValue} libras é igual a ${realValue} reais.`)
}

const MENU = `
Insira a opção desejada:
1: Converter Dólar para Real
2: Converter Euro para Real
3: Converter Libra Esterlina para Real
4: Cancelar
`
console.log(MENU)

let option = parseInt(prompt('Insira a operação desejada: '))

switch (option) {
  case 1:
    dolarToReal()
    break
  case 2:
    euroToReal()
    break
  case 3:
    poundsToReal()
    break
  case 4:
    console.log('Saindo do programa...')
    break
  default:
    console.log('ERRO: Não escolheu uma opção válida.')
}
