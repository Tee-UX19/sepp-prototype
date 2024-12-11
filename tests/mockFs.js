const fs = require("fs");

// this is a helpful function that makes the server use the fake data rather than the real stuff in the jest tests

function mockFsSetup(mockData) {
    jest.mock("fs");

    fs.readFileSync.mockImplementation((filePath) => {
        if (filePath.includes("orderItems.json")) {
            return JSON.stringify(mockData.orderItems || []);
        }
        if (filePath.includes("orders.json")) {
            return JSON.stringify(mockData.orders || []);
        }
        if (filePath.includes("users.json")) {
            return JSON.stringify(mockData.users || []);
        }
        if (filePath.includes("items.json")) {
            return JSON.stringify(mockData.items || []);
        }
        if (filePath.includes("households.json")) {
            return JSON.stringify(mockData.households || []);
        }
        
        // defaults to [] if something doesnt match (very haskell hahaha)
        return "[]";
    });

    fs.writeFileSync.mockImplementation((filePath, data) => {
        console.log(`Mock write to ${filePath}:`, data);
    });
}

module.exports = mockFsSetup;
