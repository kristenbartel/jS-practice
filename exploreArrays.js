
const digitalCraftsCrew = [
    "Jamie",
    "Dr. Vicki",
    "Jada",
    "Athena",
    "Dee",
    "Ernesto",
    "Robbie"
    ];
    //Length of the array
    //digitalCraftsCrew.length;

    console.log(digitalCraftsCrew.length);

    //Add a new item to the END of the array
    digitalCraftsCrew.push("Kristen");

    console.log(digitalCraftsCrew);

    //Remove item from the END of the array
    digitalCraftsCrew.pop();

    console.log(digitalCraftsCrew);


    //Get the index of "Dr. Vicki"-- this is called "calling a position"
        //indexof("Dr. Vicky")
        
    const indx = digitalCraftsCrew.indexOf("Dr. Vicki");
    console.log(indx);

    //other array notes 
        const everyOtherItem = digitalCraftsCrew[1,3];
        console.log(everyOtherItem);
    //why is this printing only item 3 and not 1 a well?

    //digitalCraftsCrew.slice(0, 2);
    //this will remove a specific item in the list- 
        //the first number is the start of the splice
        //the second number is how many items wish to remove FROM THERE
