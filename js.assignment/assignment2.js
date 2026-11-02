// Q1. Scope Conflict Resolver
let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true; // Change this to false and test
    
    let totalSalary = isPermanent ? salary + bonus : salary;
    console.log("Q1 Total Salary:", totalSalary);
}
calculateSalary();


// Q2. String Manipulation Report
let productName = " wireless headphones PRO ";
let cleanedName = productName.trim().toLowerCase();

// Capitalize first letter of each word
let titleCase = cleanedName.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

let finalProduct = titleCase.replace("Pro", "Pro Edition");

console.log("\nQ2 String Report:");
console.log("Cleaned Title:", finalProduct);
console.log("Length:", finalProduct.length);


// Q3. Math Utility Dashboard
let x = 16.75;
let roundedVal = Math.round(x);
let sqrtVal = Math.sqrt(x);
let powVal = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10;

console.log(`\nQ3 Math Dashboard:
- Rounded: ${roundedVal}
- Square Root: ${sqrtVal.toFixed(2)}
- Power (x^3): ${powVal.toFixed(2)}
- Random (10-50): ${randomNum}`);


// Q4. Array Performance Analyzer
let scores = [45, 78, 92, 30, 88, 65, 50, 95];
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let totalScore = scores.reduce((acc, val) => acc + val, 0);
let averageScore = totalScore / scores.length;
let passedCount = scores.filter(score => score >= 50).length;

console.log("\nQ4 Array Performance Report:");
console.log(`Highest: ${highest}, Lowest: ${lowest}`);
console.log(`Average: ${averageScore.toFixed(2)}`);
console.log(`Students Passed (>= 50): ${passedCount}`);


// Q5. Boolean Logic Access System
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log("\nQ5 Smart Home Security Status:");
console.log(isSecure ? "Secure" : "Unsafe");