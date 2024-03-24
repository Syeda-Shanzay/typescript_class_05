// Unary Operators:
// Pre Increment (++)
// let a = 10
// let b = 6
// ++a // 11
// console.log(a) // 11
// console.log(a) // 11
// console.log(++a) // 12
// console.log(a) // 12
// Post Increment (++)
// let a = 10
// let b = 6
// a++ // 11
// console.log(a) // 11
// console.log(a) // 11
// console.log(a++) // 11
// console.log(a) // 12
// Pre Decrement (--)
// let a = 10
// let b = 6
// --a // 9
// console.log(a) // 9
// console.log(a) // 9
// console.log(--a) // 9 - 1 = 8
// console.log(a) // 8
// Post Decrement (--)
// let a = 10
// let b = 6
// a-- // 9
// console.log(a) // 9
// console.log(a) // 9
// console.log(a--) // 9
// console.log(a) // 8
// Example:
var a = 10;
var b = 6;
var c = a++ + ++a + ++b + b++ + b + a-- + b--;
//10 + 12 + 7  +  7 +  8  + 12 + 8 = 64
console.log(c);
