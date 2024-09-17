/* 
    Manipulaçãode Arrays de Objetos com for Each
    7. Modificando Objetos em um Array: Crie um array de objetos produtos, onde cada objeto tem nome,
    preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço
*/

const products = [
  { name: 'Table', price: 849.9, discount: 0 },
  { name: 'Cup', price: 29.9, discount: 0 },
  { name: 'Gamer chair', price: 819.9, discount: 0 },
]

products.forEach((product) => {
  const discount = product.price * 0.1
  product.price -= discount
  console.log(
    `The discount on the ${
      product.name
    } is 10% and the total price is R$${product.price.toFixed(2)}`
  )
})
