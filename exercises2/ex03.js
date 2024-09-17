/*
    Filtrando Propriedades de Objetos: Dado um objeto produto com várias propriedades, crie uma
    função que retorna um novo objeto contendo apenas as propriedades cujo
    valor seja maior que um valor específico. Use for in para filtrar as propriedades.
*/

let product = {
  name: 'Calculator',
  price: 49.9,
  buttons: 30,
}

let filteredProduct = {}

for (let property in product) {
  if (typeof product[property] === 'number' && product[property] >= 30) {
    filteredProduct[property] = product[property]
  }
}

if (product.buttons >= 30) {
  filteredProduct.type = 'Scientific Calculator'
} else {
  filteredProduct.type = 'Normal Calculator'
}

console.log(filteredProduct)
