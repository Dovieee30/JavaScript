const cart = ["shoes", "pants", "kurta"]

//Chain of Promises
createOrder(cart) //returns orderId
// console.log(promise);

    .then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    
    .then(function(orderId){
        return proceedToPayment(orderId);
    })

    .then(function(){
        console.log(paymentInfo)
    })

//to handle rejection or errors we use catch 
    .catch(function (err) {
        console.log(err.message);
    });


//How to create promise? that is how to createOrder(cart) function that returns a promise.

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){      
        //validateCart
        //createOrder
        //orderId

        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err);
        }

        //createOrder 
        const orderId = "1234"
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000)
        }

    });

    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Succesfull");
    })
}
//we have to write a function of validateCart to use it previously.
function validateCart(cart){
    return true;
}