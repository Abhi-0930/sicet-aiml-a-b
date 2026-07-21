const a = 10
a = 20
console.log(a) // Output: TypeError: Assignment to constant variable.

const a = 10
const a = 20
console.log(a) // Output: SyntaxError: Identifier 'a' has already been declared