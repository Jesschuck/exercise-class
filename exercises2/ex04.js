/* 
    Iterando Sobre Arrays de Objetos: Crie um array de objetos pessoas, onde cada objeto representa
    uma pessoa com nome, idade,e cidade. Use for of para exibir as informações de cada pessoa no console.
*/

const peoples = [
  { name: 'Jéssica', age: 31, city: 'Sapucaia do Sul' },
  { name: 'Jonatha', age: 29, city: 'Sapucaia do Sul' },
  { name: 'Janiffer', age: 37, city: 'Gravataí' },
]

for (const people of peoples) {
  console.log(`${people.name} tem ${people.age} anos e mora em ${people.city}`)
}
