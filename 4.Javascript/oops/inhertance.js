// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Child class
class Mammal extends Animal {
    constructor(name, furColor) {
        super(name);
        this.furColor = furColor;
    }

    walk() {
        console.log(`${this.name} walks on land.`);
    }
}

// Grandchild class
class Dog extends Mammal {
    constructor(name, furColor, breed) {
        super(name, furColor);
        this.breed = breed;
    }

    // Overriding (polymorphism)
    eat() {
        console.log(`${this.name} the ${this.breed} eats dog food.`);
    }

    bark() {
        console.log(`${this.name} barks loudly!`);
    }
}

// Create an object of Dog
let myDog = new Dog("Buddy", "Brown", "Labrador");

// Access properties
console.log(myDog.name);       // Buddy
console.log(myDog.furColor);   // Brown
console.log(myDog.breed);      // Labrador

// Call methods
myDog.eat();   // Overridden method in Dog
myDog.walk();  // Inherited from Mammal
myDog.bark();  // Defined in Dog
