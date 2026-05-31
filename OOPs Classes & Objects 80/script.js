// let o = {
//     a: 1,
//     b:"Debashree"
// }
// console.log(o)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal;
// // sets rabbit.[[Prototype]] = animal
// console.log(rabbit.eats)

class Animal {
    constructor(name){
        this.name = name;
        console.log("Object is created....")
    }

    eats(){
        console.log("Kha rhi huuu")
    }

    jumps(){
        console.log("Koodh rhi huuu")
    }
}

class Lion extends Animal{
 constructor(name){
        super(name); // Call the parent class constructor
        console.log("Object is created and it is  a LION....")
    }

    eats(){
        console.log("Hass rhi hoon")
        // method overriding runs only the updated child
        super.eats()
        // runs both the parent and child method overiding with super key
    }

}

let a = new Animal("Debss")
console.log(a)

let l = new Lion("Simba")
console.log(l)

// l instanceof Lion
// true
// a instanceof Lion
// false