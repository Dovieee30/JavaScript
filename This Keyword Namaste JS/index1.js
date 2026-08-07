// this inside a object's method

//what is method?
//function inside an object is called method.
//here, printName: function is a method of an object obj- Student.
const student = {
    name: "Debss" ,
    printName: function () {
        console.log(this); // this represents the object obj
        console.log(this.name); // this.name represents the property name of object obj
    }
}
student.printName();

const student2 = {
    name: "Debashree"
};
//sharing or reusing method printName of student object to student2 object
// student2.printName(); // this will throw an error because printName is not a method of student2 object

//How to share?? : Overridding - .call() method
// 3 types: call, apply, bind
student.printName.call(student2); // value of "this" becomes student2