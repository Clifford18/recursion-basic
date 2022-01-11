const {sum_to_n_iterative} = require("./sum_to_n_iterative");
const {sum_to_n} = require("./sum_to_n.js");
const {gcd} = require("./gcd.js");
const {print_backwards} =require("./print_backwards.JS")
console.log("test");

sum_to_n_iterative(5);

console.log("sum recursively :" + sum_to_n(4));


console.log("GCD of 12 and 24 is: " + gcd(12, 24));
console.log("GCD of 12 and 27 is:" + gcd(12, 27));

console.log("Printing backward th word HELLO  : " + print_backwards("HELLO"));