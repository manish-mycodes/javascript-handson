// Group by grade and calculate average scores
// Output: { A: 87.5, B: 77.5, C: 70 }

const students = [
    { id: 1, grade: 'A', score: 90 },
    { id: 2, grade: 'B', score: 80 },
    { id: 3, grade: 'A', score: 85 },
    { id: 4, grade: 'B', score: 75 },
    { id: 5, grade: 'C', score: 70 },
]

const result = students.reduce((acc, val) => {
    const { grade, score } = val
    if (!acc[grade]) {
        acc[grade] = { totalScore: 0, count: 0 }
    }

    acc[grade].totalScore += score
    acc[grade].count += 1

    return acc
}, {})

console.log(result)

// Group by category and flatten the items array
// Output: { fruit: ['apple', 'orange', 'banana', 'grape'], vegetable: ['carrot', 'lettuce', 'spinach'] }

// const data = [
//     { id: 1, category: 'fruit', items: ['apple', 'orange'] },
//     { id: 2, category: 'fruit', items: ['banana', 'grape'] },
//     { id: 3, category: 'vegetable', items: ['carrot'] },
//     { id: 4, category: 'vegetable', items: ['lettuce', 'spinach'] },
// ]

// const result = data.reduce((acc, val) => {
//     if (Array.isArray(acc[val.category])) {
//         acc[val.category] = [...acc[val.category], ...val.items]
//     } else {
//         acc[val.category] = val.items
//     }
//     return acc
// }, {})

// console.log(result)

// Group by category and list unique types
// Output: { fruit: ['citrus', 'berry'], vegetable: ['root', 'leafy'] }

// const data = [
//     { id: 1, category: 'fruit', type: 'citrus' },
//     { id: 2, category: 'fruit', type: 'berry' },
//     { id: 3, category: 'vegetable', type: 'root' },
//     { id: 4, category: 'fruit', type: 'citrus' },
//     { id: 5, category: 'vegetable', type: 'leafy' },
// ]

// const result = data.reduce((acc, val) => {
//     if (acc[val.category] instanceof Set) {
//         const mySet = acc[val.category]
//         mySet.add(val.type)
//         acc[val.category] = mySet
//     } else {
//         const mySet = new Set()
//         mySet.add(val.type)

//         acc[val.category] = mySet
//     }

//     return acc
// }, {})

// let finalResult = {}
// for (let key in result) {
//     finalResult[key] = [...result[key]]
// }

// console.log(finalResult)

// Group by category and sum up the prices
// Output: { fruit: 4.5, vegetable: 5.5 }
// const products = [
//     { id: 1, category: 'fruit', price: 1.5 },
//     { id: 2, category: 'fruit', price: 2.0 },
//     { id: 3, category: 'vegetable', price: 3.0 },
//     { id: 4, category: 'fruit', price: 1.0 },
//     { id: 5, category: 'vegetable', price: 2.5 },
// ]
// const result = products.reduce((acc, val) => {
//     acc[val.category] = (acc[val.category] || 0) + val.price
//     return acc
// }, {})

// console.log(result)

// Output: { fruit: 3, vegetable: 2}
// const data = [
//     { id: 1, category: 'fruit' },
//     { id: 2, category: 'fruit' },
//     { id: 3, category: 'vegetable' },
//     { id: 4, category: 'fruit' },
//     { id: 5, category: 'vegetable' },
// ]

// const result = data.reduce((acc, val) => {
//     acc[val.category] = (acc[val.category] || 0) + 1
//     return acc
// }, {})

// console.log(result)

// Output { fruit: ["apple", "banana", "grape"], vegetable: ["carrot", "lettuce"]}
// const data = [
//     { id: 1, category: 'fruit', name: 'apple' },
//     { id: 2, category: 'fruit', name: 'banana' },
//     { id: 3, category: 'vegetable', name: 'carrot' },
//     { id: 4, category: 'fruit', name: 'grape' },
//     { id: 5, category: 'vegetable', name: 'lettuce' },
// ]

// const object = data.reduce((acc, val) => {
//     acc[val.category] = Array.isArray(acc[val.category])
//         ? [...acc[val.category], val.name]
//         : [val.name]

//     return acc
// }, {})

// console.log(object)
