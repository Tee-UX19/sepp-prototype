// server.js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 4141;

const validateIsDataCorrect = false;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Paths to the JSON files
const dataDir = path.join(__dirname, "data");
const orderItemsFilePath = path.join(dataDir, "orderItems.json");
const ordersFilePath = path.join(dataDir, "orders.json");
const usersFilePath = path.join(dataDir, "users.json");
const itemsFilePath = path.join(dataDir, "items.json");
const householdsFilePath = path.join(dataDir, "households.json");

// Helper function to read JSON files
const readJSONFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error reading ${filePath}:`, err);
        return [];
    }
};

// Helper function to write to JSON files
const writeJSONFile = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error(`Error writing to ${filePath}:`, err);
    }
};

// Endpoint to get all order items
app.get("/orderItems", (req, res) => {
    const orderItems = readJSONFile(orderItemsFilePath);
    res.json(orderItems);
});

// Endpoint to get the count of order items
app.get("/orderItems/count", (req, res) => {
    const orderItems = readJSONFile(orderItemsFilePath);
    const count = orderItems.length;
    res.json({ count });
});

// Endpoint to get all items
app.get("/items", (req, res) => {
    const items = readJSONFile(itemsFilePath); // Use the helper function to read items.json
    if (!items) {
        return res.status(500).json({ error: "Failed to read items data." });
    }
    res.json(items);
});

app.get("/users", (req, res) => {
    const users = readJSONFile(usersFilePath); // Use the helper function to read users.json
    if (!users) {
        return res.status(500).json({ error: "Failed to read users data." });
    }
    res.json(users);
});

app.get("/orders", (req, res) => {
    const orders = readJSONFile(ordersFilePath); // Use the helper function to read orders.json
    if (!orders) {
        return res.status(500).json({ error: "Failed to read orders data." });
    }
    res.json(orders);
});

// Endpoint to add a new order item
app.post("/orderItems", (req, res) => {
    const { OrderID, ItemID, UserID } = req.body;

    // Validate the presence of required fields
    if (OrderID === undefined || ItemID === undefined || UserID === undefined) {
        return res
            .status(400)
            .json({ error: "OrderID, ItemID, and UserID are required." });
    }

    if (validateIsDataCorrect) {
        // Validate that OrderID exists in orders.json
        const orders = readJSONFile(ordersFilePath);
        const orderExists = orders.some((order) => order.OrderID === OrderID);
        if (!orderExists) {
            return res
                .status(400)
                .json({ error: `OrderID ${OrderID} does not exist.` });
        }

        // Validate that ItemID exists in items.json
        const items = readJSONFile(itemsFilePath);
        const itemExists = items.some((item) => item.ItemID === ItemID);
        if (!itemExists) {
            return res
                .status(400)
                .json({ error: `ItemID ${ItemID} does not exist.` });
        }

        // Validate that UserID exists in users.json
        const users = readJSONFile(usersFilePath);
        const userExists = users.some((user) => user.UserID === UserID);
        if (!userExists) {
            return res
                .status(400)
                .json({ error: `UserID ${UserID} does not exist.` });
        }

        // Optionally, check if the user belongs to the house associated with the order
        const order = orders.find((order) => order.OrderID === OrderID);
        const user = users.find((user) => user.UserID === UserID);
        if (order.HouseID !== user.HouseID) {
            return res.status(400).json({
                error: `UserID ${UserID} does not belong to HouseID ${order.HouseID}.`,
            });
        }
    }

    // Read existing order items
    const orderItems = readJSONFile(orderItemsFilePath);

    // Create a new order item
    const newOrderItem = {
        OrderID,
        ItemID,
        UserID,
    };

    // Append the new order item
    orderItems.push(newOrderItem);

    // Write back to orderItems.json
    writeJSONFile(orderItemsFilePath, orderItems);

    res.status(201).json(newOrderItem);
});

// Endpoint to delete one instance of an order item
app.delete("/orderItems", (req, res) => {
    const { OrderID, ItemID, UserID } = req.body;

    // Validate the presence of required fields
    if (OrderID === undefined || ItemID === undefined || UserID === undefined) {
        return res
            .status(400)
            .json({ error: "OrderID, ItemID, and UserID are required." });
    }

    // Read existing order items
    const orderItems = readJSONFile(orderItemsFilePath);

    // Find the index of the first matching order item
    const indexToDelete = orderItems.findIndex(
        (orderItem) =>
            orderItem.OrderID === OrderID &&
            orderItem.ItemID === ItemID &&
            orderItem.UserID === UserID
    );

    if (indexToDelete === -1) {
        return res.status(404).json({ error: "No matching order item found to delete." });
    }

    // Remove the item at the found index
    orderItems.splice(indexToDelete, 1);

    // Write the updated order items back to the file
    writeJSONFile(orderItemsFilePath, orderItems);

    res.status(200).json({ message: "Order item successfully deleted." });
});

// Endpoint to create a new order
app.post("/orders", (req, res) => {
    const { HouseID, deadline } = req.body;

    // Validate required fields
    if (HouseID === undefined || deadline === undefined) {
        return res
            .status(400)
            .json({ error: "HouseID and deadline are required." });
    }

    if (validateIsDataCorrect) {
        // Validate that HouseID exists in households.json
        const households = readJSONFile(householdsFilePath);
        const houseExists = households.some(
            (house) => house.HouseID === HouseID
        );
        if (!houseExists) {
            return res
                .status(400)
                .json({ error: `HouseID ${HouseID} does not exist.` });
        }
    }

    // Read existing orders
    const orders = readJSONFile(ordersFilePath);

    // Generate a new OrderID
    const newOrderID =
        orders.length > 0
            ? Math.max(...orders.map((order) => order.OrderID)) + 1
            : 1;

    const newOrder = {
        OrderID: newOrderID,
        HouseID,
        deadline,
    };

    // Append the new order
    orders.push(newOrder);

    // Write back to orders.json
    writeJSONFile(ordersFilePath, orders);

    res.status(201).json(newOrder);
});

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;