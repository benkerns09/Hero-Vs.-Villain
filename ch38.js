var theSum;//this variable is declared in the main code. Global Scope. Any function can use this since global
addNumbers();//this function is called to assign theSum a value.

//Then the function:

function addNumbers() {
    theSum = 2 + 2;
}

//since the variable has global scope, the assignment is meaningful in all sections of your code, both the main code and in all functions.
//The variable has the value 4 in the function addNumbers -- in the main code and in any other functions that use it.

alert(theSum);//will display 4 no matter where declared

function addNumbers() {
    var theSum = 2 + 2;
}//in this case the variable is declared inside the function, so the variable has the value 4 only inside the function.
//^^everywhere else, it has no value at all. Scope here is local. 