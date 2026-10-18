// Question 1: First and Last Name
// Create two variables: `firstName` and `lastName`. Store your first and last name in them and print your full name.
let firstName = "Muqaddas";
let lastName = "Fatima";
console.log(firstName + " " + lastName);
// Output is Muqaddas Fatima:

// Question 2: Arithmetic Operations
// Create three variables: `num1`, `num2`, and `num3`. Perform the following operations using all three values:
// - Addition
// - Subtraction
// - Multiplication
// - Division
let num1 = 5;
let num2 = 10;
let num3 = 15;
// 1)Addition:
console.log("Addition:", num1 + num2 + num3);
// output is 30:
// 2)Subtraction:
console.log("Subtraction:", num1 - num2 - num3);
// output is -20:
// 3)Multiplication:
console.log("Multiplication:", num1 * num2 * num3);
// output is 750:
// 4)Division:
console.log("Division:", num1 / num2 / num3);
// output is 0.03333333333333333:

//  Question 3: Temperature Checker
// Take the temperature from the user.
// - If the temperature is 0°C or below, print `"Freezing"`.
// - Otherwise, print `"Not freezing"`
let Temperature = prompt("Check The Temperature");
if (Temperature <= 0) {
    console.log("Freezing");
}
else {
    console.log("Not freezing");
}
// output is depend on prompt:

//  Question 4: Age Category
// Take the user's age and display the appropriate category:
// - 0–12: Child
// - 13–19: Teenager
// - 20–59: Adult
// - 60 and above: Senior Citizen

let age = prompt("Enter Your Age");

if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
else if (age >= 20 && age <= 59) {
    console.log("Adult");
}
else if (age >= 60) {
    console.log("Senior Citizen");
}
else {
    console.log("Invalid Age");
}
// output is depend on prompt:

// Question 5: Electricity Bill Calculator
// Take the number of electricity units consumed and calculate the bill using these rates:
// - First 100 units: Rs. 10 per unit
// - Next 100 units: Rs. 15 per unit
// - Above 200 units: Rs. 20 per unit

let units = prompt("Enter Units");
let bill = 0;

if (units <= 100) {
    bill = units * 10;
}
else if (units <= 200) {
    bill = (100 * 10) + (units - 100) * 15;
}
else {
    bill = (100 * 10) + (100 * 15) + (units - 200) * 20;
}
console.log("Electricity Bill: Rs.", bill);
// Output is depend on prompt:

// Question 6: Traffic Light
// Take a traffic light color as input.
// - Red: `"Stop"`
// - Yellow: `"Ready"`
// - Green: `"Go"`
// - Any other color: `"Invalid Color"`

let color = prompt("Enter Traffic Light Color");
if (color === "Red") {
    console.log("Stop");
}
else if (color === "Yellow") {
    console.log("Ready");
}
else if (color === "Green") {
    console.log("Go")
}
else {
    console.log("Invalid Color");
}
// output is depend on prompt:

//  Question 7: Pocket Money Checker
// Take the amount of pocket money.
// - If it is greater than Rs. 500, print `"You can buy a gift"`.
// - Otherwise, print `"Save your money"`.

let pocketmoney = 600;
if (pocketmoney > 500) {
    console.log("You can buy a gift");
}
else {
    console.log("Save your money")
}

// output is You can buy a gift:

// Question 8: Free Delivery Checker
// Take the total shopping amount.
// - If it is Rs. 2,000 or more, print `"Free Delivery"`.
// - Otherwise, print `"Delivery Charges Apply"`.

let Shoppingamount = 3000;
if (Shoppingamount >= 2000) {
    console.log("Free Delivery");
}
else {
    console.log("Delivery Charges Apply");
}
// output free deliver:

