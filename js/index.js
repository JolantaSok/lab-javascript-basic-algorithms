// Iteration 1: Names and Input
//
// Iteration 2: Conditionals

// Iteration 3: Loops

let hacker1 = "Jolanta";
console.log("The driver's name is " + hacker1);

let hacker2 = "Atvars";
console.log("The navigator's name is " + hacker2);

let driversname = hacker1.length;
let navigatorsname = hacker2.length;

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + driversname + " characters"
  );
} else {
  if (hacker1.length < hacker2.length) {
    console.log(
      "It seems that the navigator has the longest name, it has " +
        navigatorsname +
        " characters."
    );
  } else {
    console.log(
      "Wow, you both have equally long names, " + driversname ||
        navigatorsname + " characters!"
    );
  }
}

console.log(hacker1.toUpperCase().split("").join(" "));

console.log(hacker2.split("").reverse().join(""));


while (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
  break;
}
while (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
  break;
}
while (hacker1 == hacker2) {
  console.log("What?! You both have the same name?");
  break;
}