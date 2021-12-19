//Accumulation, Counting, Decrementing

//Counting to 10 loop
//Goal is to provide ways of using loops to accumulate values
//Print 1-10
        // let n = 1;

        // while (n <= 10){ //no counter on a while loop
        // console.log(n);
        //     n++; //n++ means n+1
        // }
        
//prints then adds in succession, so the added variable goes back into parameter, once its 11 it trips the loop.

//Handing out cookies:
//step 1)
                // let n = 5;
                // let conversation = '';
                
                // while (n > 0) { //decrements twice each run through 
                //                 //5-2=3 print, 2-2=1 print, 1-2=-1 still prints because it ran the loop at factor 1.
                // conversation += "one for me. ";
                // n--;
                // conversation += "one for you\n";
                // n--;
                // }
                // console.log(conversation);
         //console.log(conversation);
        // one for me. one for you
        // one for me. one for you
        // one for me. one for you
        //console.log(n);
        // -1


//Step 1.5)
        //I tore this one apart 
        //let n = 5;
        // let conversation = '';
        // while (n > 0) {
        //   //console.log(`${n} cookie: me`);
        //   conversation = `${n} one for me.`;
        //   console.log(conversation)
        //   n--;
        //   //console.log(` cookie: you`);
        //   conversation = `${n} one for you\n`;
        //   console.log(conversation)
        //   n--;
        // }

//Step 2
        // let n = 5;
        // let conversation = '';
        // while (n > 0) {
        //   console.log(`${n} cookie: me`);
        //   conversation += "one for me. ";
        //   n--;
        //   console.log(`${n} cookie: you`);
        //   conversation += "one for you\n";
        //   n--;
        // }


//Step 3)
//remainder must be either a 1 or a 0-- a 1  
//1 means that there is an indivisible leftover (any floating point). 
//0 Means there is no leftover.
//loop nested within

        // let n = 5;    
        // let conversation = ''; 

        // while (n > 0) {    
        //   if (n % 2 !== 0) { //if remainder is 1 let in, if not move to else and print
             //console.log(`${n} cookie: me`);    
        //     conversation += "one for me. "; //this is still not function in this statement  
        //   } else {
        //     console.log(`${n} cookie: you`);    
        //     conversation += "one for you\n"; //this is still not function in this statement 
        //   }
        //   n--;    
        // }  

//Step 4)
//Removes the console log and puts outside of loops which runs the loop until it 
//can not run anymore, each loop result is filled into empty string variable
//then prints the dead loop

        // let n = 5;    
        // let conversation = '';    
        // while (n > 0) {    
        //   if (n % 2 !== 0) {
        //     conversation += "one for me. ";    
        //   } else {
        //     conversation += "one for you\n";    
        //   }
        //   n--;    
        // }    
        // console.log(conversation);

//step 6)
//this checks and extra fact about n each time. 
//Once n = 1 it adds an additional statement. 
//try moving the statement around to see it work.
        // let n = 5;    
        // let conversation = '';    
        // while (n > 0) {    
        // if (n % 2 !== 0) { //this basically means is it even or odd value
        //     conversation += "one for me. ";    
        //     if (n === 1) {
        //     conversation += "none for you. ";    
        //     }
        // } else {
        //     conversation += "one for you \n";    
        //     if (n === 2) {
        //     conversation += "almost gone! ";    
        //     }
        // }
        // n--;    
        // }    
        // console.log(conversation);
//-------------------------------------------------
//Counting and Arrays
//Step 1)
//let i=0 many times 'i' is bc it is referring to an index/array
//the beginning of the array is 0, so i=0 refers to the initial index position in the array
//you can change the index start point by changing 0 to 10 for example
//if you change the conditional operator of < you can push into different index locals
        // const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
        
        // for (let i=0; i<ratings.length; i++) { //the counter
        // console.log(ratings[i]); //this prints the array
        // }

//Step 2)
//Find and prints all the 5s in the array
        // const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
        // for (let i=0; i<ratings.length; i++) { //runs through the array to check the for the following conditional statement
        //   if (ratings[i] === 5) { //if the index location holds the value of 5 then print
        //     console.log(ratings[i]);
        //   }
        // }

//Step 3)
//This example really only cleans up the code by assigning keywords to variables
//Is this called abstraction?
//ratings[i] this is the value held in the index location
        // const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
        // const max = ratings.length;

        // for (let i=0; i<max; i++) {
        // const stars = ratings[i];
        // if (stars === 5) {
        //     console.log(stars);
        // }
        // }

//Step 4)
//count++ lets count start at 0 and counts up 1 every time the value of 5 is encountered.
        // const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 5, 5, 5, 5, 5, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
        // const max = ratings.length;
        // let count = 0;

        // for (let i=0; i<max; i++) {
        // const stars = ratings[i];
        // if (stars === 5) {
        //     count++;
        //     //console.log(stars);
        // }
        // }
        // console.log(count);

//Step 5)
// Just makes a string based on number of 5 star ratings
        // const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
        // const max = ratings.length;
        // let count = 0;

        // for (let i=0; i<max; i++) {
        // const stars = ratings[i];
        // if (stars === 5) {
        //     count++;
        // }
        // }
        // if (count >= 4) { //this is the number of 5 start ratings in the array
        // console.log('This is a featured product!');
        // } else {
        // console.log('Sorry, no homepage for you.');
        // }

//Extra Step for summing the amount of ratings
        // const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
        // const max = ratings.length;
        // let count1 = 0;
        // let count2 = 0;
        // let count3 = 0;
        // let count4 = 0;
        // let count5 = 0;

        // for (let i=0; i<max; i++) {
        // const stars = ratings[i];
        // if (stars === 5) {
        //     count5++;
        // } 
        // else if (stars === 4) {
        //     count4++; 
        // }
        // else if (stars === 3) {
        //     count3++;
        // }
        // else if (stars === 2) {
        //     count2++;
        // }
        // else if (stars === 1) {
        //     count1++;
        // }  
        // }
        // console.log("you have " + count5 + " five star reviews");
        //         //count4, count3, count2, count1);

//Summing Arrays

//Which of these is going to win
    // const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
    // const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];
    // const max = c1Votes.length; //if there is an array with a different length it may need to be noted
        //let c1Total = 0;
        //let c2Total = 0;

    // for (let i=0; i<max; i++) {
    //     //console.log(c1Votes[i]);
    //     c1Total += c1Votes[i]; //this is summing the idex values one at a time each loop
    //     //console.log(c2Votes[i]);
    //     c2Total += c2Votes[i];
    //   }
    //     console.log(c1Total);
    //     console.log(c2Total);

    //     if (c1Total > c2Total) {
    //         console.log('Candidate 1 is the winner!');
    //       } else if (c2Total > c1Total) {
    //         console.log('Candidate 2 is the winner!');
    //       } else {
    //         console.log('Time for a run-off. It was a tie!');
    //       }

//Searching
//Search 1)
    // const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
    // const tables = [3, 1, 1, 2, 3, 2];
    // const guestToFind = 'Mustard'; // hard-coded in this example

    // for (let i=0; i<guests.length; i++) {
    // if (guests[i] === guestToFind) {
    //     console.log(`${guestToFind} sits at table ${tables[i]}`);
    // }
    // }
//Search 2)
//     const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
//     const tables = [3, 1, 1, 2, 3, 2];
//     const guestToFind = 3; // hard-coded in this example

//     for (let i=0; i<guests.length; i++) {
//     if (tables[i] === guestToFind) {
//         console.log(`${guestToFind} is assigned for ${guests[i]}`);
//         break;// this break is to keep the code from running - especially if you have two of the same name
//     }// the console log is the code that compared the two and pulls the info. 
//     }

Search 3)

        const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
        const tables = [3, 1, 1, 2, 3, 2];

        const guestToFind = 'Mustard'; // hard-coded in this example
        let foundIndex = -1;

        for (let i=0; i<guests.length; i++) {
        if (guests[i] === guestToFind) {
                foundIndex = i; // just giving a name to the i variable in the parameter
                break;
        }
        }
        if (foundIndex !== -1) {
        console.log(`${guestToFind} sits at table ${tables[foundIndex]}`);
        } else {
        console.log(`${guestToFind} is not on the guest list.`);
        }
//maybe use this in a airplane seating situation where you need to know here someone it...

//Finding a substring
//step 1)
        // const HEALTHY = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
        // let sample1 = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
        // let sample2 = 'GCTZGGTGGGZCACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTZGGGCAACCC';

        // let sequence = [];

        // for (let i = 0; i<sample1.length; i++) {
        // sequence.push(sample1[i]);
        // }
        // sequence = sequence.join('');
        // console.log(sequence);

//step 2)

        // const HEALTHY = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
        // let sample1 = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
        // let sample2 = 'GCTZGGTGGGZCACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTZGGGCAACCC';
        
        // let sequence = [];

        // for (let i = 0; i<sample1.length; i++) {
        // const letter = sample2[i];
        // if (letter === 'Z') {
        // sequence.push(HEALTHY[i]);
        // } else {
        // sequence.push(letter);
        // }
        // }
        // sequence = sequence.join(', ');
        // console.log(sequence);
        // //console.log(sample2);

//In an object
////objective is to create objects from arrays and prints the array index value into a key - then the value is of the number of array value instances 
// to add a new key to an object use objectName.<newKey> or objectName.<keyName>
        // const ratings = [3, 3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
        // const max = ratings.length;
        // const ratingsCount = {};

        // for (let i=0; i<max; i++) {
        // const stars = ratings[i]; //is the value of the index location 
        // if (ratingsCount[stars]) {
        //         ratingsCount[stars]++;
        // } else {
        //         ratingsCount[stars] = 1;
        // }
        // //console.log(ratingsCount);
        // }
        // console.log(ratingsCount);
// ratingsCount[ratings] = stars;
// ratingsCount[stars] = 1;  
// ratingsCount[stars]++;
     
//fizzbuzz

        let n = 1;
        while (n <= 100) {
                
                if (n % 3 === 0){
                        console.log('fizz');    
                } else if (n % 5 === 0){
                        console.log('buzz');     
                } else {
                        console.log(n);     
                }
                n++
        }
        
   