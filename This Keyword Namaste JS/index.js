"use strict";

//this in Global space 

console.log(this); 
/* represents the globalobject - window in browser.
 globalobject ? - where JS runs in the browser is window object. 
 In nodejs it is global object. */



//this inside the function

function x() {
    /* The value depends on Strict , non-strict mode.
       if its in strict Mode value of console.log(this) : Undefined
       non-strict Mode : value window */
    console.log(this);
}
x();
window.x(); 

/* WHY?? : The value depends on Strict , non-strict mode. 
   => "this substitution" means : If the value of this keyword is undefined or null,
       then this keyword will be replaced by global object,
       only in non-strict mode.
*/

//this keyword value depends on how the function is called.
//if calling without any reference x(); shows undefined
//with reference window.x(); shows window object.


