let person = {
    name: 'Manish',
}

function printName(hometown, state) {
    console.log(`name is ${this.name} town ${hometown} state ${state}`)
}

// function borrowing

let person2 = {
    name: 'Ram Kumar',
}

let person3 = {
    name: 'Bhaskar Talla',
}

printName.call(person, 'Muzaffarpur', 'Bihar')

printName.apply(person2, ['Mumbai', 'Maharastra'])

let printMyName = printName.bind(person3, 'Varli', 'Maharastra')
printMyName()
