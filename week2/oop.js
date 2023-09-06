// 4 Pillar of OOP

// Polymorphism
// Abstraction
// Encapsulation
// Inheritance

class Fruit {
    static allFruits = []
    constructor(name) {
        this.name = name
        Fruit.allFruits.push(this)
    }

    getName() {
        return this.name
    }

    static getAllFruits() {
        this.getName()
        return Fruit.allFruits
    }
}

const apple = new Fruit("apple")
const strawberry = new Fruit("strawberry")

console.log(apple.getName())
console.log(Fruit.getAllFruits())
