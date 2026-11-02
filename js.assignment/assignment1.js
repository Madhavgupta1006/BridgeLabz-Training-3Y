// Q1: Personalized Login Greeting
let userName = "Madhav";
let currentHour = new Date().getHours();
let greeting = "";

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}
console.log(greeting);

// Q2: Multi-Type Data Summary
let str = "Hello";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "Madhav" };
let nullVal = null;
let undefVal;

let summary = [
    { Label: "String", Value: str, Type: typeof str },
    { Label: "Number", Value: num, Type: typeof num },
    { Label: "Boolean", Value: bool, Type: typeof bool },
    { Label: "Array", Value: arr, Type: Array.isArray(arr) ? "array" : typeof arr },
    { Label: "Object", Value: obj, Type: typeof obj },
    { Label: "Null", Value: nullVal, Type: typeof nullVal },
    { Label: "Undefined", Value: undefVal, Type: typeof undefVal }
];
console.table(summary);

// Q3: Monthly Expense Tracker
let expenses = [3000, 2000, 10000, 1500, 2500];
let total = expenses.reduce((acc, val) => acc + val, 0);
let tax = total * 0.10;
let finalAmount = total + tax;
let average = total / expenses.length;

console.log("Total Expense:", total.toFixed(2));
console.log("Average Expense:", average.toFixed(2));
console.log("Final Amount (with 10% tax):", finalAmount.toFixed(2));

// Q4: Academic Performance Evaluator
let marks = [75, 82, 68, 90, 85];
let sumMarks = marks.reduce((acc, val) => acc + val, 0);
let percentage = (sumMarks / (marks.length * 100)) * 100;
let hasFailed = marks.some(mark => mark < 35);

let result = "";
if (hasFailed || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else {
    result = "Promoted";
}
console.log("Performance Result:", result, `(${percentage.toFixed(2)}%)`);

// Q5: Weather Activity Planner
let temperature = 30;
let isRaining = false;
let windSpeed = 10;
let advice = "";

if (isRaining) {
    advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
} else {
    advice = "Perfect day for a walk.";
}
console.log("Weather Advice:", advice);

// Q6: Progressive Discount System
let totalPurchase = 7500;
let discountRate = 0;

if (totalPurchase >= 10000) {
    discountRate = 0.25;
} else if (totalPurchase >= 5000) {
    discountRate = 0.15;
} else if (totalPurchase >= 2000) {
    discountRate = 0.05;
}

let discountAmount = totalPurchase * discountRate;
let finalPayable = totalPurchase - discountAmount;

console.log("Original Total:", totalPurchase);
console.log("Discount Applied:", discountAmount);
console.log("Final Payable:", finalPayable);