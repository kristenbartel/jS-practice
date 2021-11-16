// Follow the instructions below. As you go through the process console log each variable to see it change!

// 1. Create a new Object representing YOU. Include they following keys: fullName, age, faveColor, and likesPizza.
// HINT: likesPizza accepts a boolean.
const kBartel = {
    fullName: "Kristen Bartel",
    age: "38",
    faveColor: "green",
    likesPizza: true
}
console.log(kBartel.fullName);

// 2. Create a new variable and set it equal to the faveColor property.
let color = kBartel.faveColor;

console.log(color);

// 3. Update your fullName to only be your last name.
kBartel.fullName = "Bartel";

console.log(kBartel.fullName);

// 4. Delete the likesPizza property.
delete kBartel.likesPizza

console.log(kBartel);

// 5. Add a new key that represents your fave food and mirrors the likePizza. The value will represent the fact that you like it :)
kBartel.likesCookies = true;

console.log(kBartel.likesCookies + ", she likes cookies!");
// For example, I would like put likesCookies.