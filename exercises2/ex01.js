/*
    Manipulação de objetos:

    
    Acessando Propriedades de Objetos: Crie um objeto carro com propriedades como marca, modelo,
    ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
    valores no console.
*/

let car = {
  brand: 'Honda',
  model: 'Civic',
  year: 2020,
  color: 'Black',
}

for (let property in car) {
  console.log(`${property}: ${car[property]}`)
}
