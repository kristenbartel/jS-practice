//function keyword, arguments and parameters
function add(x, y){
    return x + y;
}
const result = add(2, 3);
console.log(result);

//x, y are the parameters
//2, 3 are the arguments
//add is the keyword. These keywords CAN be broken and will run the latest one, so be careful about resuse

//another way to write it:
function add(); {
    let x = 2;
    let y = 3;
    let funAnswer = x + y;
    return console.log(funAnswer);
}

add() // this function keyword invokes