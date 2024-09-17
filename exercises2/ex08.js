/* 
    8. Criando novos Arrays apartir de Objetos: Crie um array de objetos filmes, onde cada filme tem titulo,
    diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.
*/

const movies = [
  { title: 'Corpse Bride', director: 'Tim Burton', yearOfRelease: 2005 },
  {
    title: 'The Nightmare before Christmas',
    director: 'Tim Burton',
    yearOfRelease: 1993,
  },
  { title: 'Beetlejuice', director: 'Tim Burton', yearOfRelease: 1988 },
]

const moviesTitles = []

movies.forEach((movie) => {
  moviesTitles.push(movie.title)
})

console.log(moviesTitles)
