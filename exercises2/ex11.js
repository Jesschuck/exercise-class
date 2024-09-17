/*
    11. Agrupando Elementos com forEach: Crie um array de objetos pedidos, onde cada pedido tem
    cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade 
    total de produtos por cliente.
*/

const orders = [
  { client: 'Jessica', product: 'Mouse', quantity: 1 },
  { client: 'Giu', product: 'Notebook', quantity: 3 },
  { client: 'Pauline', product: 'Keyboard', quantity: 2 },
  { client: 'Pauline', product: 'Notebook', quantity: 1 },
  { client: 'Giu', product: 'Keyboard', quantity: 1 },
  { client: 'Jessica', product: 'Notebook', quantity: 1 },
]

let totalByClient = {}

orders.forEach((order) => {
  if (totalByClient[order.client]) {
    totalByClient[order.client] += order.quantity
  } else {
    totalByClient[order.client] = order.quantity
  }
})

console.log(totalByClient)
