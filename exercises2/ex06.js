/*
    6. Filtrando Arrays de Objetos: Crie um array de objetos funcionarios, onde cada objeto
    contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas 
    os funcionários cujo salário seja maior que um valor específico.
*/

const funcionarios = [
  {
    name: 'Jéssica',
    cargo: 'Desenvolvedora de Software Junior',
    salario: 3000,
  },
  { name: 'Jonatha', cargo: 'Desenvolvedor de Software Pleno', salario: 6000 },
  { name: 'Janiffer', cargo: 'Analista de sistemas', salario: 4000 },
]

for (const funcionario of funcionarios) {
  if (funcionario.salario >= 4000) {
    console.log(
      `${funcionario.name} é ${funcionario.cargo} e tem o salário de R$${funcionario.salario} `
    )
  }
}
