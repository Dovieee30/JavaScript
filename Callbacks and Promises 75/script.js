console.log("Debss is a Hacker");
console.log("Debashree is a Hecker");

// function is called in another function is called callback function - asynchronous data

setTimeout(() => {
    console.log("Iam Inside SetTimeout")
}, 2000);

setTimeout(() => {
    console.log("Iam Inside 0 s SetTimeout")
}, 0);

console.log("The End")

const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src ;
    sc.onload = callback("DOVIEEE",fn);
    document.head.append(sc)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", callback)

// https://cdnjs.com/libraries/prism