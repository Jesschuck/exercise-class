/* 
    Verificando Propriedades: Crie um objeto livro com propriedades titulo, autor,
    anoPublicacao e genero. Verifique se a propriedade editora existe no
    objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

let book = {
  title: 'Carmilla',
  author: 'Sheridan Le Fanu',
  yearPublication: 1871,
  genre: 'Horror',
}

let hasEditora = false

for (let property in book) {
  if (property === 'editora') {
    hasEditora = true
  }
}

if (!hasEditora) {
  book.editora = 'Unknown'
}

console.log(book)
