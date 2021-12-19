//fizzbuzz


// bizzfuzz for a range of nums
let bizzfuzz = (num, num2) => {
        while (num <= num2) {
            
                
            if (num % 3 === 0 && num % 5 === 0) {
                console.log("bizzfuzz"); 
            } else if (num % 3 === 0){
                        console.log('fizz');    
                } else if (num % 5 === 0) {
                        console.log('buzz');   
                } else {
                    console.log(num);
                }
                num++
        }
    }

    bizzfuzz(21, 51);