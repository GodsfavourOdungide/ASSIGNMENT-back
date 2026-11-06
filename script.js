

// Q1
let name = "Favour";
let scores = [78, 65, 80, 72, 69]; // 5 subjects

let total = scores.reduce((a, b) => a + b, 0);
let average = total / scores.length;
let grade;

if (average >= 70) grade = "A";
else if (average >= 60) grade = "B";
else if (average >= 50) grade = "C";
else if (average >= 45) grade = "D";
else if (average >= 40) grade = "E";
else grade = "F";

console.log(`Name: ${name}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Grade: ${grade}`);


// Q2
let employeeName = "Favour";
let basicSalary = 150000;

let housing = basicSalary * 0.10;
let transport = basicSalary * 0.05;
let tax = basicSalary * 0.03;
let finalSalary = basicSalary + housing + transport - tax;

console.log(`Employee: ${employeeName}`);
console.log(`Basic Salary: ₦${basicSalary}`);
console.log(`Housing Allowance (10%): ₦${housing}`);
console.log(`Transport Allowance (5%): ₦${transport}`);
console.log(`Tax Deduction (3%): ₦${tax}`);
console.log(`Final Salary: ₦${finalSalary}`);



// Q3
let numbers = [12, 7, 25, 30, 41, 8, 19, 22, 33, 50, 3, 18, 27, 44, 60];

let even = numbers.filter(n => n % 2 === 0);
let odd = numbers.filter(n => n % 2 !== 0);
let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);
let sum = numbers.reduce((a, b) => a + b, 0);
let avg = sum / numbers.length;

console.log("Even:", even);
console.log("Odd:", odd);
console.log("Largest:", largest);
console.log("Smallest:", smallest);
console.log("Sum:", sum);
console.log("Average:", avg.toFixed(2));



// Q4
let students = [];

function addStudent(id, name, email, age, course) {
  students.push({ id, name, email, age, course });
  console.log("Student added");
}
function displayStudents() { console.log(students); }
function searchStudent(id) { return students.find(s => s.id === id); }
function updateStudent(id, newData) {
  let s = searchStudent(id);
  if (s) Object.assign(s, newData);
}
function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
}

addStudent(1, "Favour A.", "favour@gmail.com", 20, "Computer Science");
addStudent(2, "John O.", "john@gmail.com", 21, "Engineering");
displayStudents();
console.log(searchStudent(1));
updateStudent(1, { age: 21 });
deleteStudent(2);



// Q5
let products = [
  { id: 101, name: "Rice", price: 50000, quantity: 10 },
  { id: 102, name: "Oil", price: 20000, quantity: 3 },
  { id: 103, name: "Sugar", price: 15000, quantity: 2 },
];

function addProduct(p) { products.push(p); }
function displayProducts() { console.log(products); }
function totalValue() { return products.reduce((sum, p) => sum + p.price * p.quantity, 0); }
function searchProduct(id) { return products.find(p => p.id === id); }
function updateQuantity(id, qty) { let p = searchProduct(id); if (p) p.quantity = qty; }
function lowStock() { return products.filter(p => p.quantity < 5); }

displayProducts();
console.log("Total Inventory Value:", totalValue());
console.log("Low Stock:", lowStock());




// Q6
let cart = [];

function addToCart(name, price, qty) { cart.push({ name, price, qty }); }
function removeFromCart(name) { cart = cart.filter(i => i.name !== name); }
function updateQty(name, qty) { let item = cart.find(i => i.name === name); if (item) item.qty = qty; }

function checkout() {
  let total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  let discount = total > 50000 ? total * 0.10 : 0;
  let final = total - discount;
  console.log("Cart:", cart);
  console.log(`Total: ₦${total}, Discount: ₦${discount}, Final: ₦${final}`);
}

addToCart("Shoes", 30000, 2);
addToCart("Bag", 15000, 1);
checkout();




// Q7
let account = { name: "Favour", number: "0123456789", balance: 50000 };

function deposit(amount) {
  if (amount <= 0) return console.log("Cannot deposit negative amount");
  account.balance += amount;
  console.log(`Deposited ₦${amount}. New balance: ₦${account.balance}`);
}
function withdraw(amount) {
  if (amount > account.balance) return console.log("Insufficient funds");
  account.balance -= amount;
  console.log(`Withdrew ₦${amount}. New balance: ₦${account.balance}`);
}
function checkBalance() { console.log(`Balance: ₦${account.balance}`); }
function displayAccount() { console.log(account); }

deposit(10000);
withdraw(20000);
withdraw(100000);
checkBalance();



// Q8
function validatePassword(password) {
  let errors = [];
  if (password.length < 8) errors.push("At least 8 characters");
  if (!/[A-Z]/.test(password)) errors.push("At least one uppercase letter");
  if (!/[a-z]/.test(password)) errors.push("At least one lowercase letter");
  if (!/[0-9]/.test(password)) errors.push("At least one number");
  if (!/[!@#$%^&*]/.test(password)) errors.push("At least one special character");

  if (errors.length === 0) return "Valid password";
  return "Invalid: Missing - " + errors.join(", ");
}
console.log(validatePassword("Favour123!"));
console.log(validatePassword("weak"));



// Q9
let employees = [
  { name: "Favour", salary: 250000, department: "IT" },
  { name: "John", salary: 180000, department: "HR" },
  { name: "Mary", salary: 320000, department: "IT" },
];

let byDept = (dept) => employees.filter(e => e.department === dept);
let highEarners = () => employees.filter(e => e.salary > 200000);
let avgSalary = () => employees.reduce((s, e) => s + e.salary, 0) / employees.length;
let highest = () => employees.reduce((max, e) => e.salary > max.salary ? e : max);
let namesOnly = () => employees.map(e => e.name);

console.log(byDept("IT"));
console.log(highEarners());
console.log(avgSalary());
console.log(highest());
console.log(namesOnly());




// Q10
function registerUser(name, email, age, password) {
  try {
    if (!name) throw new Error("Name cannot be empty");
    if (!email.includes("@") || !email.includes(".")) throw new Error("Invalid email format");
    if (age < 18) throw new Error("Must be at least 18 years old");
    if (password.length < 8) throw new Error("Password must be at least 8 characters");
    console.log("Registration successful for " + name);
  } catch (error) {
    console.log("Error: " + error.message);
  }
}
registerUser("Favour", "favour@gmail.com", 20, "Favour123!");
registerUser("", "bademail", 16, "123");






// Q12
let users = [
  { id: 1, name: "Favour", email: "favour@gmail.com" },
  { id: 2, name: "John", email: "john@gmail.com" },
  { id: 3, name: "Mary", email: "mary@gmail.com" },
  { id: 4, name: "Peter", email: "peter@gmail.com" },
  { id: 5, name: "Grace", email: "grace@gmail.com" },
];

let jsonString = JSON.stringify(users);
console.log("JSON String:", jsonString);

let parsedUsers = JSON.parse(jsonString);
console.log("Parsed Object:", parsedUsers);

let found = parsedUsers.find(u => u.email === "mary@gmail.com");
console.log("Found User:", found);



// Q13
function receiveOrder() { return new Promise(res => setTimeout(() => res("Order received"), 1000)); }
function verifyOrder() { return new Promise(res => setTimeout(() => res("Order verified"), 1000)); }
function processPayment() {
  return new Promise((res, rej) => setTimeout(() => {
    let success = false; // Change to true to simulate success
    if (success) res("Payment successful");
    else rej("Payment failed");
  }, 1000));
}
function confirmOrder() { return new Promise(res => setTimeout(() => res("Order confirmed"), 1000)); }

receiveOrder()
  .then(msg => { console.log(msg); return verifyOrder(); })
  .then(msg => { console.log(msg); return processPayment(); })
  .then(msg => { console.log(msg); return confirmOrder(); })
  .then(msg => console.log(msg))
  .catch(err => console.log("Error:", err));




// Q14
async function fetchUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    users.forEach(u => console.log(`${u.name} - ${u.email}`));

    let searchEmail = "Sincere@april.biz";
    let found = users.find(u => u.email === searchEmail);
    console.log(found ? `Found: ${found.name}` : "User does not exist");
  } catch (error) {
    console.log("API Error:", error.message);
  }
}
fetchUsers();



// Q15
let usersDB = [];
let nextId = 1;

function registerUser(name, email, age) {
  if (!name || !email || !age) return console.log("All fields required");
  if (usersDB.some(u => u.email === email)) return console.log("Email already exists");
  if (age < 18) return console.log("Must be 18+");
  let user = { id: nextId++, name, email, age, registrationDate: new Date().toISOString() };
  usersDB.push(user);
  console.log("Registered:", user);
}
function getAllUsers() { return usersDB; }
function getUserById(id) { return usersDB.find(u => u.id === id) || "Not found"; }
function updateUser(id, newData) {
  let u = usersDB.find(u => u.id === id);
  if (u) Object.assign(u, newData);
}
function deleteUser(id) { usersDB = usersDB.filter(u => u.id !== id); }
function searchByName(name) { return usersDB.filter(u => u.name.toLowerCase().includes(name.toLowerCase())); }

registerUser("Favour A.", "favour@gmail.com", 20);
registerUser("John O.", "john@gmail.com", 22);
registerUser("Favour A.", "favour@gmail.com", 20); // duplicate email test
console.log(getAllUsers());
console.log(searchByName("fav"));
console.log(getUserById(1));
updateUser(1, { age: 21 });
deleteUser(2);
console.log(getAllUsers());

