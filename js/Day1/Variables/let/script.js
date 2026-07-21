// let cannot be redeclared but can be reassigned

let a = 10
a = 20
console.log(a)  // Output: 20

let a = 10
let a = 20  
console.log(a) // This will throw an error because 'a' has already been declared in the same scope