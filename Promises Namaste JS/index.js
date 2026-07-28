const cart = ["shoes", "shirt", "hat"];

//Async operations using callback
//create a order and give an orderID for Payment 
//ISSUE: Inversion of control - gave the control of a program to other part of code(control of payment to create order)
   
createOrder(cart, function(){
    proceedToPayment(orderID);
}); 


//SOLUTION: Promises
//Promise is a empty object {} which has a data that is returned from the createOrder(cart) api this api is a async operation. 

const promise = createOrder(cart);

//if start execute this line : {data: undefined} 
// after few seconds(async time) executes : {data: orderDetails}

promise.then(function(){
    proceedToPayment(orderID)
});

//Attach a callback function to promise using .then ,when data retrives in the promise object this callback function automatically executes.

//conclusion : previously we were passing the callback function , now we are attaching the callback function. we have the control 
