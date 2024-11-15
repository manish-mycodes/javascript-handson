function flattenArray(arr) {
    return arr.reduce(
        (acc, val) =>
            Array.isArray(val)
                ? acc.concat(flattenArray(val))
                : acc.concat(val),
        []
    )
}

const arr = [1, [2, [3, [4]], 5]]
console.log(flattenArray(arr))

// // Remove Duplicates - Using Set
// const arr = [1, 2, 2, 3, 4, 4, 5]
// const newArr = [...new Set(arr)]
// console.log(newArr)

// // Remove Duplicates - Using reduce method

// let array = [1, 2, 2, 3, 4, 4, 5]

// const unqArr = array.reduce((acc, current, index) => {
//     if (!acc.includes(current)) acc.push(current)
//     return acc
// }, [])

// console.log(unqArr)

// Remove Duplicates - Using Filter

// let array = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = array.filter((item, index) => array.indexOf(item) === index);

// console.log(uniqueArray);

// Remove Duplicates - Using Splice Method
// function removeDuplicates(arr) {
//     const ht = {}
//     arr.forEach((elem, index) => {
//         if (elem in ht) arr.splice(index, 1)
//         else ht[elem] = elem
//     })
//     return arr
// }

// const arr = [1, 2, 2, 3, 4, 4, 5]

// console.log(removeDuplicates(arr))
// console.log(arr)
