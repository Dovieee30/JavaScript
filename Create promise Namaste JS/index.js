const cart = ["shoes", "pants", "kurta"]

const promise = createOrder(cart); //orderId

promise.then(function(){
    proccedPayment(orderId);
})

//How to create promise that is how to createOrder(cart) function that returns a promise.
