/*
    5. Calculando Valores em Arrays de Objetos: Crie um array de objetos alunos, cada um com propriedades
    nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir 
    o nome do aluno junto com sua média.
*/

const alunos = [
  { name: 'Jéssica', nota1: 10, nota2: 6 },
  { name: 'Jonatha', nota1: 10, nota2: 7 },
  { name: 'Janiffer', nota1: 8, nota2: 5 },
]

for (const aluno of alunos) {
  let media = (aluno.nota1 + aluno.nota2) / 2
  console.log(`${aluno.name} tem a media de ${media} `)
}
