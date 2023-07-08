function sortEmployeesBySalary(input) {
  const employees = input.split(" ");
  const numEmployees = parseInt(employees.shift());
  const sortedEmployees = [];

  // Create an array of employee objects with name and salary
  for (let i = 0; i < numEmployees; i++) {
    const name = employees.shift();
    const salary = parseInt(employees.shift());
    sortedEmployees.push({ name, salary });
  }

  // Sort employees based on salary in ascending order
  sortedEmployees.sort((a, b) => a.salary - b.salary);

  // Get sorted employee names
  const sortedNames = sortedEmployees.map((employee) => employee.name);

  return sortedNames;
}

// Example usage:
const input = "3 Karthik 23000 rohan 81734 varshini 12343";
const sortedNames = sortEmployeesBySalary(input);
console.log(sortedNames.join("\n"));
