/*
    15. Filtrando e Somando Valores: Crie um array de objetos transacoes, onde cada transação tem
    tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas
*/

const transactions = [
  { type: 'entry', value: 500 },
  { type: 'entry', value: 200 },
  { type: 'entry', value: 300 },
  { type: 'exit', value: 100 },
  { type: 'exit', value: 100 },
  { type: 'exit', value: 100 },
  { type: 'exit', value: 100 },
]

let finalBalance = 0

transactions.forEach((transaction) => {
  if (transaction.type === 'entry') {
    finalBalance += transaction.value
  } else if (transaction.type === 'exit') {
    finalBalance -= transaction.value
  }
})

console.log(`The final balance is: $${finalBalance.toFixed(2)}`)
