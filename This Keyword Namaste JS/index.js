"use strict";

//1. this in Global space 

console.log(this); 
/* refer the globalobject 
   globalobject ? - where JS runs.
   In browser globalobject is window object. 
   In nodejs it has diff global object.
 */



//2. this inside the function

function x() {
    /* The value depends on Strict , non-strict mode.
       if its in strict Mode value of console.log(this) : Undefined
       non-strict Mode : value window */
    console.log(this);

    /* WHY?? : The value on non-strict mode become window
       => beacuse of "this substitution" means : If the value of this keyword is undefined or null,
           then this keyword will be replaced by global object,
           happens only in non-strict mode.
    */
}

x();
window.x(); 
//this keyword value depends on how the function is called.

//if calling without any reference x(); shows undefined
//with reference window.x(); shows window object.


