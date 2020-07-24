'use strict'
//mutating
let mutatingAdd = ['a', 'b', 'c', 'd', 'e'] //add
mutatingAdd.push('f')
mutatingAdd.unshift('z')
console.log(mutatingAdd)

let mutatingRemove = ['a', 'b', 'c', 'd', 'e'] //remove
let returnedValue2 = mutatingRemove.shift()
console.log(mutatingRemove)
console.log(returnedValue2)

let x = mutatingRemove.splice(0, 2)// splice
console.log(x)



//non mutating
let arr1 = ['a', 'b', 'c', 'd', 'e']

let arr2 = arr1.concat('f') //concat
console.log(arr2); 

let arr3 = arr1.filter(a => a !== 'e') // array.filter() method creates a new array from an original array, 
//but the new array only contains items that match the specified criteria
console.log(arr3)



