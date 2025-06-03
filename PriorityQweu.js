// basisc priority queu 

class Stack {

    // this is standard why in js class  initialize instance-specific data when the object is created.
    constructor() {
        // Initialize your stack 

        //  this is used attaches the items array to the current instance of the Stack class.
        // If I just used items inside the constructor without this, the variable would be local to the constructor only and not accessible in other methods like push(), pop(), etc.
        this.items = []
    }
    
    push(element) {
        // Add element to the top 
        this.items.push(element) 
        return this.items.length; 
    }
    
    pop() {
        // Remove and return top element  
        if (this.isEmpty()) {
            return undefined
        }
       return this.items.pop() 
       
    }
    
    peek() {
        // Return top element without removing
        if (this.isEmpty()) {
            return undefined
        }
       return this.items[this.items.length - 1]
       
    }
    
    isEmpty() {
        // Check if stack is empty
         return this.items.length === 0
    }
    
    size() {
        // Return number of elements
        return this.items.length; 
    }
    
    clear() {
        // Remove all elements
        this.items.length = null; 
        return this.items
    }
}
const val = new Stack()
// becuse of this.items we can create the multiple instance also 
const val2 = new Stack()
console.log(val.push(5))
console.log(val.push(5))
console.log(val.peek())
console.log(val.size())
console.log(val.clear())
console.log(val.isEmpty())