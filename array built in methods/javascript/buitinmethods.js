'use strict'

let name = ["Smith", "John", "Adams", "Peter","Luke"];
console.log('Original array: ' +name)
let state = ["Pune", "Hyedrabad" , "Bangalore" , "Delhi"]

name.shift() //shift removes the first array element and "shifts" all other elements to a lower index
console.log('Array after shift : '+name)

name.unshift("Maria") //unshift adds a new element to an array (at the beginning), and "unshifts" older elements
console.log('Array after unshift : '+name)


name[0] = "Kevin" //Changes the element according to index provided
console.log('Array after adding an element :' +name)

delete name[2]
console.log('Array after deleting an element :' +name)

name.splice(1,0, "Kenny","Jean") //Adds elements (at which position , how many elements to delete)
console.log('Array after adding new elements :' +name)

name.splice(4,1) //Removes elements
console.log('Array after removing elements :' +name)

let personNameState = name.concat(state)
console.log('Array after concatenating name and state : '+ personNameState )

name.copyWithin(2,0) // it copies the element within array does not add any value
console.log('Array after copyWithin :' + name)



let x = name.join(" and ")
console.log('Array after joining : ' + x)


let y = name.valueOf() //valueOf method returns the array
console.log(y)
 

console.log('Original array :' + state)

state.reverse()
console.log('Array after reversing  : ' +state)

let find = state.lastIndexOf("Pune")
console.log('Index of Pune : ' + find)

let length = state.length
    console.log('Length of array : ' +length)

