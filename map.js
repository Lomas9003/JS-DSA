
const users = [
  { id: 1, name: "Alice", dept: "IT", salary: 50000, skills: ["JS", "React"] },
  { id: 2, name: "Bob", dept: "HR", salary: 40000, skills: ["Recruiting"] },
  { id: 3, name: "Charlie", dept: "IT", salary: 70000, skills: ["JS", "Node"] },
  { id: 4, name: "David", dept: "Finance", salary: 60000, skills: ["Excel"] },
  { id: 5, name: "Eve", dept: "IT", salary: 45000, skills: ["React"] },
]; 

// {
//   IT: {
//     JS: { employees: ["Alice", "Charlie"], avgSalary: 60000 },
//     React: { employees: ["Alice", "Eve"], avgSalary: 47500 },
//     Node: { employees: ["Charlie"], avgSalary: 70000 }
//   },
//   HR: {
//     Recruiting: { employees: ["Bob"], avgSalary: 40000 }
//   },
//   Finance: {
//     Excel: { employees: ["David"], avgSalary: 60000 }
//   }
//   }
