'use strict'
// this in global scope
//console.log(this) - Always refers to global Object

// this inside a function
function abc() {
    // the value of this depends on strict / non-strict mode
    console.log(this)
}

/* this in strict mode - (this substitution)
If the value of 'this' is undefined or null 'this' will refer globalObject in non-strict mode. */

// this value depends on how this is called (window)
//abc() // undefined
//window.abc() // window

// this inside a object's method

// const obj = {
//     a: 10,
//     x: function () {
//         console.log(this)
//     },
//     y: () => {
//         console.log(this)
//     },
// }

// obj.x()

// obj.y()

// call apply bind methods (sharing methods)

// const student = {
//     name: 'Manish',
//     printName: function () {
//         console.log(this.name)
//     },
// }

// const student2 = {
//     name: 'Aradhna',
// }
// student.printName()
// // value of this inside printName becomes student2
// student.printName.call(student2)

// this inside arrow function
const obj = {
    name: 'Dr Jackal',
    x: function () {
        const y = () => {
            console.log(this)
        }
        y()
    },
}

obj.x()

// this inside nested arrow function

// this inside DOM => refers to HTML Element
