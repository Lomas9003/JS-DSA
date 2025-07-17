

let Input = ["alice", "bob", "charlie"]

let val = Input.map((val) => {
      return  val.charAt(0).toUpperCase() + val.slice(1)
})

// console.log(val)
// [ 'Alice', 'Bob', 'Charlie' ]

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 }
];

let val2 = users.filter((val) => {
    return val.age > 20
})
// if onle name age greater then 20
.map((val) => val.name)

// console.log(val2)
// Output: [{ name: "Bob", age: 25 }]


let input1 = [0, 1, false, 2, '', 3]

let val3 = input1.filter((val) => Boolean(val) !== false)
// console.log(val3)

let input3 = [1, 2, 3, 4]

let val4 = input3.map((val , index) => val * index )
// console.log(val4)

const users1 = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];

const val5 = users1.map((val) => val.firstName + val.lastName)
// console.log(val5)

const users2 = [
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob" }
];

const val6 = users2.filter((val) => val.email)
// console.log(val6)

//count the word lomger then 5 character 

const words = ["apple", "banana", "strawberry", "kiwi"];

const val7 = words.filter(word => word.length > 5).length
console.log(val7);

// find duplicate number

let num = [1, 2, 2, 3, 4, 4, 5]













