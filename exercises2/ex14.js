/* 
    14. Manipulando Objetos Complexos : Crie um objeto empresa com uma propriedade departamentos,
    que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. 
    Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome 
    de cada funcionário junto com o departamento ao qual pertence.
*/

const company = {
  departments: [
    {
      name: 'Development',
      employees: ['Jessica', 'Jonatha', 'Janiffer'],
    },
    {
      name: 'Marketing',
      employees: ['Volnei', 'Fátima', 'Lili'],
    },
    {
      name: 'HR',
      employees: ['Pauline', 'Giu'],
    },
  ],
}

for (const departmentKey in company.departments) {
  const department = company.departments[departmentKey]

  for (const employee of department.employees) {
    console.log(`${employee} works in the ${department.name} department.`)
  }
}
