const cart = ["shoes", "pants", "kurta"]

const promise = createOrder(cart); //returns orderId
console.log(promise);

promise.then(function(orderId){
    console.log(orderId);
    // proccedPayment(orderId);
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

//we have to write a function of validateCart to use it previously.
function validateCart(cart){
    return true;
}