// let obj = {
//     a:1,
//     b:"raman"
// }
// console.log(obj);

// let animal ={
//     eats: true
// }
// let rabbit ={
//     jumps:true
// }
// rabbit.__proto__ = animal

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...");
  }
  eats() {
    console.log("I am eating");
  }
  jumps() {
    console.log("I am jumping");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    console.log("Object is created and he is a Lion");
  }
  eats() {
    super.eats()
    console.log("I am eating roar");
  }
}

let a = new Animal("Billa");
console.log(a);

let l = new Lion("Shera");
console.log(l);
