const arr = [1, 2, 3, 4, 5, 6]

Array.prototype.myMap = function (cb) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        newArr[i] = cb(this[i], i)
    }

    return newArr
}

const doubledListValue = arr.myMap((el, i) => el * 2)

console.log(doubledListValue)

// Array.prototype.myForEach
// Array.prototype.myForEach = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i], i)
//     }
// }

// arr.myForEach((el, i) => {
//     console.log('element is ', el)
// })

// Function.prototype.myBind

// let name = {
//     firstName: 'Manish',
//     lastName: 'Kumar',
// }

// let printName = function (hometown, state) {
//     console.log(
//         this.firstName +
//             ' ' +
//             this.lastName +
//             ' hometown ' +
//             hometown +
//             ' State ' +
//             state
//     )
// }

// Function.prototype.myBind = function (...args) {
//     let obj = this
//     let params = args.slice(1)
//     return function (...args2) {
//         obj.apply(args[0], [...params, ...args2])
//     }
// }

// let printMyName2 = printName.myBind(name, 'Muzaffarpur')
// printMyName2('Bihar')
