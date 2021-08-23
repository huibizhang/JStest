const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] }
];


/*
  1. Count Employees Number by Factory
  => [ {name: ‘BR1’, count: 4}, … ]
*/
const getEmployeeCounts = (factoryList) => {
  return factoryList.map((factory) => {
    return {
      name: factory.name,
      count: factory.employees.length
    }
  })
}


/*
  2. Count Factories Number by Employee
  => [ {employee: ‘John’, count: 2}, … ]
*/
const getEmployeesWorkingFactories = (factoryList) => {
  const employees = {}
  
  factoryList.forEach((factory) => {
    factory.employees.forEach((employee) => {
      !employees[employee]
      ? employees[employee] = 1
      : employees[employee]++
    })
  })

  return Object.entries(employees)
    .map((employee) => {
      return {
        employee: employee[0],
        count: employee[1]
      }
    })
}

/*
  3. Order employees list by alphabetical order
  => { name: “BR2”, employees: [“Jessie”, “John”, “Karen”] }
*/
const orderByAlphabetical = (factoryList) => {
  return factoryList.map((factory) => {
    return {
      name: factory.name,
      employees: factory.employees.sort()
    }
  })
}




console.log(
  "1. Count Employees Number by Factory",
  getEmployeeCounts(factories)
)

console.log(
  "2. Count Factories Number by Employee",
  getEmployeesWorkingFactories(factories)
)

console.log(
  "3. Order employees list by alphabetical order",
  orderByAlphabetical(factories)
)