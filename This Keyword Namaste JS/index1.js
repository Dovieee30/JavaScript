//3. this inside a object's method

//what is method?
//function inside an object is called method.
//here, printName: function is a method of an object - Student.
const student = {
    name: "Debss" ,
    roll: 26,
}

//method 
const printName = function(hobb, state) {
    console.log(this.name + " " + this.roll + " Hobby : " + hobb + state); 
}

const student2 = {
    name: "Debashree",
    roll: 66,

};
//sharing or reusing method printName of student object to student2 object
// student2.printName(); // this will throw an error because printName is not a method of student2 object

//How to share?? :Method Overridding.
// 3 types: call, apply, bind

// .call() method
printName.call(student, "Sketching", " Mumbai ");
// printName.call(student2); // value of "this" becomes student2

// .apply() method - pass as an 2nd arguement in form of combined list.
printName.apply(student, ["Sketching", " Mumbai "]);

// .bind() method - creates new method - printMyName, gives the copy of Method and invoke it later
let printMyName = printName.bind(student2, "Dancing", " Navi Mumbai ")
console.log(printMyName);
printMyName();
