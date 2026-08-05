"use strict";

//this in Global space 

console.log(this); 
/* represents the globalobject - window in browser.
 globalobject ? - where JS runs in the browser is window object. 
 In nodejs it is global object. */



//this inside the function

function x() {
    /* The value depends on Strict , non-strict mode.
       strict Mode : value Undefined
       non-strict Mode : value window */
    console.log(this);
}
x();

/* WHY?? : The value depends on Strict , non-strict mode. 
   => "this substitution" : If the value of this keyword is undefined or null,
       then this keyword will be replaced by global object,
       only in non-strict mode.
*/