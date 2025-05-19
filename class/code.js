// 1. Create an array to hold inventory items
let inventory = [];

// 2. Create three items with properties (name, model, cost, quantity)
const item1 = {
    name: "Laptop",
    model: "Dell XPS",
    cost: 999.99,
    quantity: 10
};

const item2 = {
    name: "Phone",
    model: "iPhone 13",
    cost: 799.99,
    quantity: 15
};

const item3 = {
    name: "Tablet",
    model: "iPad Pro",
    cost: 899.99,
    quantity: 8
};

// 3. Add all three objects to the main array using array method
inventory.push(item1, item2, item3);

// Log the inventory array to console
console.log("Complete Inventory:");
inventory.forEach(item => {
    console.log(`Name: ${item.name}, Model: ${item.model}, Cost: $${item.cost}, Quantity: ${item.quantity}`);
});

// 4. Access the quantity element of the third item
console.log(`\nQuantity of third item (${inventory[2].name}): ${inventory[2].quantity}`);

// Experiment by adding and accessing more elements
// Adding a new item
const item4 = {
    name: "Smartwatch",
    model: "Apple Watch",
    cost: 399.99,
    quantity: 20
};

inventory.push(item4);

// Accessing the new item
console.log(`\nNew item added - Name: ${inventory[3].name}, Quantity: ${inventory[3].quantity}`);
