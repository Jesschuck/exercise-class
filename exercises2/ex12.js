/* 
    12. Atualizando um Array de Objetos : Crie um array de objetos estoque, onde cada objeto tem
    produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão 
    abaixo do mínimo, duplicando suas quantidades.
*/

const stocks = [
  { product: 'Mouse', quantity: 3, minimum: 5 },
  { product: 'Keyboard', quantity: 11, minimum: 10 },
  { product: 'Notebook', quantity: 5, minimum: 8 },
]

stocks.forEach((stock) => {
  if (stock.quantity < stock.minimum) {
    stock.quantity *= 2
  }
})

console.log(stocks)
