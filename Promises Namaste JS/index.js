const cart = ["shoes", "shirt", "hat"];

//Async operations using callback
//create a order and give an orderID for Payment 
//ISSUE: Inversion of control - gave the control of program to other part of code(control of payment to create order)
   
createOrder(cart, function(){
    proceedToPayment(orderID);
}); 


//SOLUTION:

const promise = createOrder(cart);

//Promise is a empty object 
