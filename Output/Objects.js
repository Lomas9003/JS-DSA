

// function constructor where used to create the blue print of object before ES6 but after we es6 we have a clss keyword 

class Person{
    constructor(fname , Lname, contact){ // it is used for intizalitaztion 
        this.fname = fname;
        this.lname = Lname; 
        this.contact = contact; 
    }
    getName() {
        return this.fname
    }

    getContact(){
        return this.contact
    }
}


// function Person(Fname , Lname, contact){
//     this.fname = Fname,
//     this.Lname =  Lname, 
//     this.contact = contact,
    
//     this.getName = function(){
//         return this.fname
//     }
// }

const p1 = new Person("Ishan" , "Lomas", "00000000")
const p2 = new Person("Mukesh" , "maurya", "00000000")
console.log(p1)
// console.log(p2.getName())


// Normal why of creating object with object literals 
const person = {
    Fname: "Ishan",
    Lname: "Lomas",
    contact: 999999999,
    
    getName: function(){
        return person.Fname
    }
}
const person2 = {
    Fname: "Mukesh",
    Lname: "Maurya",
    contact: "00000000000",
    
    getName: function(){
        return this.Fname
    }
}

// console.log(person.getName())
// console.log(person2.getName())