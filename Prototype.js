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
