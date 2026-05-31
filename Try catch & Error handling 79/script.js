let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");

let sum = parseInt(a) + parseInt(b);
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry This is not allowed");
}

function main(){
    let X = 1;

    try {
        console.log("The sum is: " , sum*X);
        return true
        
    } catch (error) {
        console.log("Error Aagya Debashreeee jiii")
        return false
    }
    
    finally{
        console.log("Files are being closed and db connection is being closed")
    }
}
    

// finally always returns its value even if there is a return statement inside the function, in normal functions always returns the value and stops there it self and doesnot executes the other statements below inside a function but finally still executes the finally block code

let c = main();