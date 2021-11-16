//anonymous functions
//one way of scripting add is add()
//step 1)
    // function kristen(x, y) {
    //     return x + y;
    // }
    // //call it like this:
    // const result = kristen(2, 3);
    // console.log(result);
    // // 5

//step 2)
    // const add = function (x, y) { //we make a variable = a function that can be called in later
    //     return x + y; // this whole thing is aka a function expression
    // };
    // console.log(add(2, 3));

    // const result = add(2, 3); //this variable = the function above
    // console.log(result);

    // const add = (x, y) => { // here we see parameter then function 
    //     return x + y;
    //   }


    //step 3)
    // here we can script vars as func
    //-- like out declaration block - aka function expressions
        // const add = (x, y) => {
        //     return x + y;
        // }
        // const sub = (x, y) => {
        //     return x - y;
        // };
        // const mul = (x, y) => {
        //     return x * y;
        // };
        // const div = (x, y) => {
        //     return x / y;
        // }
        // const apply = (a, b, placeHolder) => {
        //     const val = placeHolder(a, b);
        //     return val;
        // }// these placeHolders can take any function expression

        // const result = apply(2, 3, div); //use any function expression needed
        //     console.log(result);
// 5

//apply can be passed a function expression aka callback or function value

//step 3-- addition
        // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // let result = nums[0];
        // for (let i=1; i<nums.length; i++) {
        // result = result + nums[i];
        // console.log(result);	
        // }
//subtraction
        // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // let result = nums[0];
        // for (let i=1; i<nums.length; i++) {
        // result = result - nums[i];
        // console.log(result);	
        // }
//multiplication
        // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // let result = nums[0];
        // for (let i=1; i<nums.length; i++) {
        // result = result * nums[i];
        // console.log(result);	
        // }

        // const add = (x, y) => {
        //     return x + y;
        // }
        // const sub = (x, y) => {
        //     return x - y;
        // };
        // const mul = (x, y) => {
        //     return x * y;
        // };
        // const div = (x, y) => {
        //     return x / y;
        // }
        // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // const reduce = (arr, fn) => {
        //     let result = arr[0];
          
        //     for (let i=1; i<arr.length; i++) {
        //       result = fn(result, arr[i]);
        //     }
        //     return result;
        //   }
        //   const kristen = reduce (arr, add);
        //   console.log(kristen);
//this is the principle of calling in functions to simplify the s

//exponents
        //Squaring a values in an array-- you can simply cube them by using the comment below
        // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // let result = [];
        // for (let i=0; i<nums.length; i++) {
        //   result.push(nums[i] * nums[i]); // you can add in another <* nums[i]>
        // }
        // console.log(nums); // this will show the array
        // console.log(result); //this will show the array powered to the 2ndth



//mapping is the term for this. pushing into array

        // const square = (z) => {
        //     return z * z;
        // }

        // const cube = (z) => {
        //     return z * z * z;
        // }

        // const map = (arr, fn) => { 
        //     const result = [];
        //     for (let i=0; i<arr.length; i++) {
        //         result.push(fn(arr[i]));
        //     }
        //     return result;
        // }
        // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // console.log(map(arr, square));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (val) => {
    return val % 2 === 0;
        };
        
const isOdd = (val) => {
    return val % 2 === 1;
         };

const filter = (arr, fn) => {
const result = [];

    for (let i=0; i<arr.length; i++) {
      if (fn(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  };

const result = filter(arr, isOdd);

console.log(result);
