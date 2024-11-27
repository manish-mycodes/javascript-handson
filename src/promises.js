const fetchPromise = fetch('https://jsonplaceholder.typicode.com/todos/1')

const data = fetchPromise.then((responseObj) => responseObj.json())

console.log(data)
data.then((data) => console.log(data))

// function createOrder(cart) {
//     const obj = []

//     return new Promise((resolve, reject) => {
//         cart.forEach((el, idx) => obj.push({ id: idx, type: el }))
//         setTimeout(() => {
//             resolve(obj)
//         }, 300)
//     })
// }

// function processPayment(orderIds) {
//     return new Promise((resolve, reject) => {
//         const paymentIds = orderIds.map((order, idx) => ({
//             paymentId: `Pmt-${idx}`,
//             amt: 100,
//         }))

//         setTimeout(() => {
//             resolve(paymentIds)
//         }, 400)
//     })
// }

// const cart = ['Shoes', 'Bag', 'Laptop']
// const promise = createOrder(cart)

// promise
//     .then((orderIds) => processPayment(orderIds))
//     .then((paymentIds) => console.log(paymentIds))
