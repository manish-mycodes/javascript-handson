class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance
        }
        this.data = 'Singleton Instance'
        Singleton.instance = this
    }

    getData() {
        console.log(Singleton.instance)
        return this.data
    }
}

const instance1 = new Singleton()
const instance2 = new Singleton()

console.log(Singleton.instance)
console.log(instance1 === instance2)
console.log(instance1.getData())
console.log(instance2.getData())
