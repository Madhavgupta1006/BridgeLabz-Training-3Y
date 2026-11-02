// Q1: The Startup Morning: Async Coffee Maker
console.log("--- Q1: Async Coffee Maker ---");

const boilWater = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) reject("Error: Water heater failed!");
            else { console.log("1. Water boiled."); resolve(); }
        }, 1500);
    });
};

const brewCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) reject("Error: Coffee brewing failed!");
            else { console.log("2. Coffee brewed."); resolve(); }
        }, 1500);
    });
};

const pourCup = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3. Poured into cup.");
            resolve();
        }, 1000);
    });
};

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCup())
    .then(() => console.log("Coffee ready for the team!\n"))
    .catch(err => console.log(err, "\n"));


// Q2: Task Scheduler: Micro vs Macro Challenge
console.log("--- Q2: Task Scheduler (Event Loop) ---");
console.log("Start");

setTimeout(() => {
    console.log("Macrotask: setTimeout callback (runs last)");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask: Promise.then callback (runs before macrotask)");
});

console.log("End");
/* Explanation:
   JavaScript event loop processes synchronous code first ("Start", "End").
   Then it checks the Microtask Queue (Promises), which has higher priority.
   Finally, it checks the Macrotask Queue (setTimeout).
*/


// Q3: Bug Tracker: Callback to Promise Migration
console.log("\n--- Q3: Bug Tracker ---");
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.1; // 90% success rate
            if (success) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("Failed to fetch bugs from server!");
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        let formattedBugs = bugs.map(bug => ({ BugDescription: bug, Status: "Open" }));
        console.table(formattedBugs);
    })
    .catch(err => console.log("Bug Fetch Error:", err));


// Q4: DevOps Delay: Async Timeout Race
console.log("\n--- Q4: DevOps Server Responses ---");
const serverA = new Promise((resolve) => setTimeout(() => resolve("Server A response"), 2000));
const serverB = new Promise((resolve) => setTimeout(() => resolve("Server B response"), 3000));

Promise.all([serverA, serverB])
    .then(results => {
        console.log("Promise.all:", results);
        console.log("Deployment completed for all servers");
    })
    .catch(err => console.log("Deployment Error:", err));

Promise.race([serverA, serverB])
    .then(fastest => {
        console.log("Promise.race - Fastest response:", fastest);
    });


// Q5: Frontend Rush: Avoiding Callback Hell
console.log("\n--- Q5: Refactoring Callback Hell using Async/Await ---");
const asyncStage = (stageName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Stage completed: ${stageName}`);
            resolve();
        }, 1000);
    });
};

async function runPipeline() {
    await asyncStage("design");
    await asyncStage("build");
    await asyncStage("test");
    await asyncStage("deploy");
    await asyncStage("celebrate");
    console.log("Pipeline finished successfully!\n");
}
runPipeline();
/* Explanation: 
   Async/await flattens nested callback structures (pyramid of doom) 
   into clean, synchronous-looking code, making error handling with try/catch easier.
*/


// Q6: E-Commerce Dashboard: Product Card Fetcher
console.log("--- Q6: E-Commerce Product Card Fetcher ---");
const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Wireless Mouse", price: 499 },
                { id: 2, title: "Mechanical Keyboard", price: 2499 },
                { id: 3, title: "Gaming Headset", price: 1799 }
            ]);
        }, 1200);
    });
};

async function displayProductCards() {
    try {
        console.log("Fetching products...");
        const products = await fetchProducts();
        console.log("Fetched Product Cards:");
        console.table(products);
    } catch (err) {
        console.log("Failed to load products:", err);
    }
}
displayProductCards();