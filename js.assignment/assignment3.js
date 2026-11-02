// Q1: Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
let validNumericData = [];
let invalidData = [];

console.log("--- Q1: Dynamic Data Parser ---");
apiData.forEach(item => {
    let num = Number(item);
    let isInvalid = item === null || item === undefined || item.toString().trim() === "" || isNaN(num) || typeof item === "boolean";
    
    if (isInvalid || item === "NaN" || item === "100px" || item === " ") {
        invalidData.push(item);
    } else {
        validNumericData.push(num);
    }
});
console.log("Valid Numeric Data:", validNumericData);
console.log("Invalid/Skipped Data:", invalidData);


// Q2: Employee Bonus Calculator
"use strict";
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("\n--- Q2: Employee Bonus Calculator ---");
employees.forEach(emp => {
    try {
        let sal = Number(emp.salary);
        let yrs = Number(emp.years);
        if (isNaN(sal) || isNaN(yrs)) throw new Error("Invalid conversion data");

        let bonus = yrs > 3 ? sal * 0.1 : sal * 0.05;
        console.log(`Employee: ${emp.name} | Salary: ${sal} | Years: ${yrs} | Bonus: ${bonus}`);
    } catch (error) {
        console.log(`Error processing ${emp.name}:`, error.message);
    }
});


// Q3: Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

console.log("\n--- Q3: Transaction Validator ---");
let validTransactions = [];
let invalidTransactions = [];

transactions.forEach(tx => {
    try {
        if (!tx) throw new Error("Null or undefined entry");
        if (!tx.id || tx.amount === undefined) throw new Error("Missing amount or id");
        if (tx.amount < 0) throw new Error("Negative amount");
        
        validTransactions.push(tx);
    } catch (err) {
        invalidTransactions.push({ transaction: tx, error: err.message });
    }
});

console.log("Successful Transactions Count:", validTransactions.length);
console.log("Failed Transactions Count:", invalidTransactions.length);


// Q4: Debugging Mystery
"use strict";
console.log("\n--- Q4: Debugging Mystery ---");
function showMessage() {
    let greeting = "Welcome"; // Fixed by adding 'let' to prevent implicit global error
    console.log(greeting);
}
showMessage();


// Q5: Hoisting Lab: The Sequence Trap
console.log("\n--- Q5: Hoisting Lab ---");
var hoistedVar = "I am hoisted!";
console.log("Var hoisted value:", hoistedVar);

try {
    console.log(hoistedLet);
} catch (e) {
    console.log("Caught Temporal Dead Zone error for 'let':", e.message);
}
let hoistedLet = "I am safe from hoisting confusion!";


// Q6: Pyramid Pattern Generator
console.log("\n--- Q6: Pyramid Pattern Generator ---");
let limit = 5;
for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}


// Q7: Smart Calculator
console.log("\n--- Q7: Smart Calculator ---");
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

operations.forEach(op => {
    try {
        let res;
        switch (op) {
            case "add": res = num1 + num2; break;
            case "subtract": res = num1 - num2; break;
            case "divide": 
                if (num2 === 0) throw new Error("Division by zero error");
                res = num1 / num2; 
                break;
            case "power": res = Math.pow(num1, 2); break;
            case "root": 
                if (num1 < 0) throw new Error("Square root of negative number");
                res = Math.sqrt(num1); 
                break;
            default: throw new Error("InvalidOperationError");
        }
        console.log(`Operation (${op}):`, res);
    } catch (err) {
        console.log(`Operation (${op}) Failed:`, err.message);
    }
});


// Q8: Strict Mode Showdown
console.log("\n--- Q8: Strict Mode Showdown ---");
function demo(a, b) {
    "use strict";
    // Duplicate parameter names are illegal in strict mode
    console.log("Parameters working safely under strict mode:", a, b);
}
demo(5, 10);


// Q9: JSON Audit
console.log("\n--- Q9: JSON Audit ---");
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanUsers = [];
rawData.forEach((item, index) => {
    try {
        let parsed = JSON.parse(item);
        if (!parsed.user || !parsed.age) throw new Error(`Missing keys at line ${index + 1}`);
        cleanUsers.push({ user: parsed.user, age: Number(parsed.age) });
    } catch (err) {
        console.log(`JSON Error at entry ${index + 1}:`, err.message);
    }
});
console.log("Valid Cleaned Users:", cleanUsers);


// Q10: Nested Hoisting and Closures
console.log("\n--- Q10: Nested Hoisting and Closures ---");
function outer() {
    var count = 5;
    console.log("Outer count:", count);
    
    const inner = () => {
        let count = 10;
        console.log("Inner count (Arrow function scope):", count);
    };
    inner();
}
outer();