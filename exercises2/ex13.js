/* 
    13. Implementando um Carrinho de Compras: Crie um objeto carrinho com uma propriedade itens, que é um
    array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, 
    e precoUnitario. Use forEach para calcular o valor total do carrinho.
*/

const shoppingCarts = [
  { name: 'Mouse', quantity: 10, price: 199.9 },
  { name: 'Keyboard', quantity: 10, price: 399.9 },
  { name: 'Notebook', quantity: 5, price: 3.499 },
]

let totalShoppingCart = 0

shoppingCarts.forEach((shoppingCart) => {
  totalShoppingCart += shoppingCart.quantity * shoppingCart.price
})

console.log(`The total sales value is: R$${totalShoppingCart.toFixed(2)}`)
