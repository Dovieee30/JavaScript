//this inside arrow function : does not have its own "this" value. It takes the "this" value from the surrounding lexical context.

const obj = {
    a: 10,
    x: () => {
        console.log(this); // this represents the object obj
    }
}
obj.x(); //takes the value of global object because arrow function does not have its own "this" value. It takes the "this" value from the surrounding enclosing lexical context. 

//
const obj2 = {
    a: 10,
    x: function() {
        //enclosing lexical context 
        
        console.log(this);
        //or : same output can be achieved by using arrow function inside the method of an object.
        const y = () => {
            console.log(this);
        }
        y();
    }
}
obj2.x();