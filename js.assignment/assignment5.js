// Q1: Greeting with Callback
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

console.log("--- Q1: Callback Flow ---");
greetUser("Madhav", showEndMessage);


// Q2: Array Operation with Callback
function applyOperation(numbers, operation) {
    let result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

console.log("\n--- Q2: Array Operation ---");
let doubled = applyOperation([1, 2, 3, 4], num => num * 2);
let squared = applyOperation([1, 2, 3, 4], num => num * num);
console.log("Doubled:", doubled);
console.log("Squared:", squared);


// Q3: Object and Arrow Function Scope (`this` context explanation)
console.log("\n--- Q3: Arrow Function vs Normal Function Scope ---");
const userArrow = {
    name: "Madhav",
    showName: () => {
        console.log("Arrow Function this.name:", this.name); // undefined (inherits global/module scope)
    }
};
userArrow.showName();

const userNormal = {
    name: "Madhav",
    showName: function() {
        console.log("Normal Function this.name:", this.name); // Madhav (binds to the object)
    }
};
userNormal.showName();


// Q4: Constructor Function and Prototype Sharing
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    return `Car: ${this.brand} ${this.model}`;
};

console.log("\n--- Q4: Prototype Method Sharing ---");
let car1 = new Car("Toyota", "Fortuner");
let car2 = new Car("Honda", "City");
console.log(car1.getDetails());
console.log(car2.getDetails());


// Q5: Prototype Inheritance Chain
function Person(name) {
    this.name = name;
}
Person.prototype.printName = function() {
    return `Name: ${this.name}`;
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function() {
    return `Branch: ${this.branch}`;
};

console.log("\n--- Q5: Prototype Chain ---");
let studentObj = new Student("Madhav", "Computer Science");
console.log(studentObj.printName());
console.log(studentObj.printBranch());


// Q6: Deep Prototype Chain (Person -> Faculty -> Professor)
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.printDept = function() { return `Dept: ${this.department}`; };

function Professor(name, department, researchArea) {
    Faculty.call(this, name, department);
    this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.printResearch = function() { return `Research: ${this.researchArea}`; };

console.log("\n--- Q6: Deep Prototype Chain ---");
let prof = new Professor("Dr. Sharma", "CSE", "AI & ML");
console.log(prof.printName());
console.log(prof.printDept());
console.log(prof.printResearch());


// Q7: Closures (Multiplier Factory)
function makeMultiplier(multiplier) {
    return function(num) {
        return num * multiplier; // Retains access to 'multiplier' from outer scope
    };
}

console.log("\n--- Q7: Closure Example ---");
const triple = makeMultiplier(3);
console.log("Triple of 5:", triple(5)); // 15


// Q8: Custom Prototype Method myMap()
Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

console.log("\n--- Q8: Custom myMap Method ---");
let customMapped = [1, 2, 3].myMap(num => num * 2);
console.log("Result:", customMapped);


// Q9: ES6 Classes with extends and super()
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    printName() {
        return `Name: ${this.name}`;
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    printBranch() {
        return `Branch: ${this.branch}`;
    }
}

console.log("\n--- Q9: ES6 Classes Inheritance ---");
let studentClassObj = new StudentClass("Madhav", "Data Science");
console.log(studentClassObj.printName());
console.log(studentClassObj.printBranch());