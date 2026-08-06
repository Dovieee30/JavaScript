// this inside a object's method

//what is method?
//function inside an object is called method.
//here, x: function is a method of an object obj.
const obj = {
    a: 10,
    x: function () {
        console.log(this); // this represents the object obj
        console.log(this.a); // this.a represents the property a of object obj
    }
}
obj.x();