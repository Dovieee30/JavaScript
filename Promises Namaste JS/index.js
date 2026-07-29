const cart = ["shoes", "shirt", "hat"];

//Async operations using callback
//create a order and give an orderID for Payment 
//ISSUE: Inversion of control - gave the control of a program to other part of code(control of payment to create order)
   
createOrder(cart, function(orderID){
    proceedToPayment(orderID);
}); 

//Callback hell - Pyramid Of DOM 
//Code starts growing horizonatly & hard to maintain.

createOrder(cart, function(orderID){
    proceedToPayment(orderID, function(paymentInfo){
        ordersummary(paymentInfo, function(){
            updatebalance();
        });
    });
}); 



//SOLUTION: Promises
//Promise is an empty object {} which has a data, that is returned from the createOrder(cart) api , this api is a async operation.
//Promise is an object represents eventual completion or failure of an asynchronous Operartion.

const promise = createOrder(cart);

//if start execute this line : {data: undefined} 
// after few seconds(async time) executes : {data: orderDetails}

promise.then(function(){
    proceedToPayment(orderID)
});

//Attach a callback function to promise using .then ,when data retrives in the promise object this callback function automatically executes.

//conclusion : previously we were passing the callback function , now we are attaching the callback function. we have the control 
