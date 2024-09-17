/*
    9. Contabilizando Elementos com uma Condição: Crie um array de objetos clientes, cada um com propriedades
    nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.
*/

const clients = [
  { name: 'Jéssica', age: 31, city: 'Canoas' },
  { name: 'Jonatha', age: 28, city: 'Paverama' },
  { name: 'Volnei', age: 60, city: 'Gravataí' },
]

let counter = 0

clients.forEach((client) => {
  if (client.age >= 30) {
    counter++
  }
})

console.log(`The number of clients who are over 30 years old is ${counter}.`)
