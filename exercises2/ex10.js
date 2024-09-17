/* 
    10. Criando Relatórios com Objetos e Arrays: Crie um array de objetos vendas, onde cada objeto tem produto,
    quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.
*/

const sales = [
  { product: 'Mouse', quantity: 5, price: 199.9 },
  { product: 'Keyboard', quantity: 2, price: 399.9 },
  { product: 'Notebook', quantity: 1, price: 3.499 },
]

let totalSale = 0

sales.forEach((sale) => {
  totalSale += sale.quantity * sale.price
})

console.log(`The total sales value is: ${totalSale.toFixed(2)}`)
