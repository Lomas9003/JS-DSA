function Car(name , brand){
    this.name = name;    //this refers to the specific object being created when new Car() is called.

    // It ensures each instance has its own name and brand values.  
    this.brand = brand
 
    this.start = () => {
        console.log(`${this.brand} and ${this.name}`)
    } 

    // we are creating same thing with prototype because 
            // 1.Without prototype, every object would have its own copy of the start function, consuming more memory.
            //2.With prototype, the method is shared among all instances, reducing memory usag 
            //3. Since methods are stored in prototype, JavaScript does not recreate them for each object, leading to better execution performance
    Car.prototype.start = () => {
        console.log(`${this.brand} and ${this.name}`)
    }
}

const car1 = new Car("duster" , "Renoult") 
const car2 = new Car("duster" , "Renoult") 

//without prototypr
console.log(car1.start === car2.start); // false (Each object has its own copy)

//  with prototpe
console.log(car1.start === car2.start); // true (Shared method from prototype)

car1.start()
car2.start()  

// Instances like car1 don’t have a prototype property. That belongs to the constructor function (Car).
// But car1 does have __proto__, which points to Car.prototype, enabling inheritance of shared methods.

// ✅ __proto__ is the internal link (also called [[Prototype]]) that every JavaScript object has, which points to the prototype object it inherits from (usually from a constructor function’s prototype).

// ✅ prototype is a property of functions (specifically constructor functions), used to define shared methods and properties for objects created with new.


let counter = 0;

function increaseCounter() {
  counter++; // modifies external variable
  return counter;
}

console.log(increaseCounter()); // 1
console.log(increaseCounter()); // 2