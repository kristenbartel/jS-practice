//text or string can be used in a lot of different ways
//"", '', ``, //  which one you choose may be determined by what is surrounding the string
//= assignment operator, this means we are assigning a value to a vaiable. (or label the value for reuse)
//righthandside (RHS) = lefthandside (LHS)
    //the LHS must always be a variable name
    //the RHS can be an expression but must be a single value or reducable to a single value
//+ concatonation operator, this brings together strings or can even bring together a string w/ a varible
//const creates a permanent variable for a value


const firstNumber = 23;
let secondNumber = 19;
const theAnswer = firstNumber + secondNumber;
console.log("The answer is", theAnswer);

secondNumber = 100;
console.log("The answer is still", theAnswer);
console.log("Even though the second number is now", secondNumber);

//it is important to know that RHS is never recomputed, even if one of it's parts changes
//so this exmaple shows that even though we tried to change the RHS it did not compute that change
//What happens when we assign a variable:
    //Reduced the RHS to a single value 
    //Reserves the memory for the value
    //Saves the value to a memory address
    //Associates the variable name witht he memory address

//interpolation can be used to use a value within a printed string
    //const 23 + 19;
    //console.log('the answer is ${theAnswer}! Isn't that wonderful!');
    //${} inputs the variable into a printed string
    