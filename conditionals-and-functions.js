/*
 * Conditionals, Functions, Scope and Loops
 */

// Equals
let equals = 1===1
console.log(equals)
// Greater than
let greaterThan = 5>1
// Less than
let lessThan = 2<18
// Greater than Equals
let greaterThanEq= 5 >= 5
// Less than Equals
let lessThanEq = 4 <= 9
// Not Equals
let notEquals = 5 !== 2

let storeA = 1.40
let storeB = 4.40

function compareStorePrices (storeA, storeB){
let storeAISLower = storeA < storeB
console.log(storeAISLower)
if (storeAISLower){console.log("store A has a lower price")}
else if (storeB<storeA) {console.log ("store B has a slower price")}
else {console.log("their prices are equal")}}

compareStorePrices(10, 5)
compareStorePrices(7,10)


function squareNum (number) {return number*number}
let squaredNumber=squareNum(4)
console.log(squaredNumber)


let x=10
function addNumbers (n,m) { console.log(x); if (1===1) let b=8; return n+m}
console.log(b)
addNumbers(2,3,8)
console.log(x)

let ourArray = [1, 2, 3, 4, 5]
let newArr = ourArray [4]
console.log(newArr[0])
console.log(ourArray[3][0])

//for(counter; comp; incr;)
for (let i=0; i<5; i++)
    console.log("i is equal to:" + i)
    console.log(ourArray[i])

while (x<10) { console.log ('ran')}