var promise = new Promise(function(resolve, reject) {//promise constructor takes one argument -- a callback with two parameters, resolve and reject
    //do a thing, possibly async, then...

    if (/* everything turned out fine */) {
        resolve("Stuff worked!");
    }
    else {
        reject(Error("It Broke"));
    }
});

//^^how you create a promise


promise.then(function(result) {//then takes two arguments -- a callback for a success case, and another for the failure case. Both are optional, meaning you can add a callback for the success or failure case only
    console.log(result); // "Stuff worked!"
}, function(err) {
    console.log(err); //Error : "It broke"
})

//^^how you use the promise