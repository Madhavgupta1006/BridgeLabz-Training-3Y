// Q1: E-Commerce Product Manager
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(percent) {
        this.price -= this.price * (percent / 100);
    }
    toString() {
        return `Product: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 45000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Smartphone", 25000, "Electronics"),
    new Product(4, "Keyboard", 1200, "Accessories")
];

products[0].applyDiscount(10);
console.log("--- Q1: Products > 1000 ---");
products.filter(p => p.price > 1000).forEach(p => console.log(p.toString()));


// Q2: Student Form Validator (RegExp Logic)
function validateStudentForm(name, email, phone, password) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;

    return {
        nameValid: nameRegex.test(name),
        emailValid: emailRegex.test(email),
        phoneValid: phoneRegex.test(phone),
        passValid: passRegex.test(password)
    };
}
console.log("\n--- Q2: Student Form Validation Test ---");
console.log(validateStudentForm("Madhav Gupta", "madhav@domain.com", "9876543210", "Pass@123"));


// Q3: Library Management System
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }
    issueBook() {
        if (!this.isIssued) { this.isIssued = true; return true; }
        return false;
    }
    returnBook() { this.isIssued = false; }
}

const library = [
    new Book("JavaScript Guide", "Author A", "ISBN101"),
    new Book("Node.js Masterclass", "Author B", "ISBN102", true)
];

console.log("\n--- Q3: Available Books ---");
library.filter(b => !b.isIssued).forEach(b => console.log(b.title));


// Q4: Custom Form Builder
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }
    renderHTML() {
        return `<form>${this.fields.map(f => `<label>${f.label}</label><input type="${f.type}"><br>`).join('')}</form>`;
    }
}
const myForm = new FormBuilder([{ type: 'text', label: 'Username' }, { type: 'password', label: 'Password' }]);
console.log("\n--- Q4: Dynamic Form HTML ---");
console.log(myForm.renderHTML());


// Q5: Movie Ticket Booking
function bookTicket(name, email, seats) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name) || !emailRegex.test(email) || seats < 1 || seats > 10) {
        return "Validation Failed!";
    }
    return { name, email, seats };
}
console.log("\n--- Q5: Movie Ticket Booking ---");
console.log(bookTicket("Madhav", "madhav@gmail.com", 3));


// Q6: Employee Management System
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getAnnualSalary() { return this.salary * 12; }
    applyBonus(percent) { this.salary += this.salary * (percent / 100); }
}

const employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Rahul", "HR", 35000),
    new Employee(3, "Sneha", "Finance", 50000),
    new Employee(4, "Kiran", "IT", 45000),
    new Employee(5, "Pooja", "Marketing", 30000)
];

const totalPayout = employees.reduce((acc, emp) => acc + emp.getAnnualSalary(), 0);
console.log("\n--- Q6: Total Company Annual Payout ---");
console.log("₹" + totalPayout);


// Q7: Login Form Validation using RegExp
function validateLogin(username, password) {
    const userValid = username.length >= 5;
    const passValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

    if (userValid && passValid) return "Login Success!";
    return "Login Failed: Check username (>5 chars) or password strength.";
}
console.log("\n--- Q7: Login Validation Test ---");
console.log(validateLogin("madhav10", "Strong@123"));