const request = require("supertest");
const mockFsSetup = require("./mockFs");
const server = require("../backend/server"); 

jest.mock("fs");

describe("Server Tests with Mocked FS", () => {
    beforeAll(() => {
        const mockData = {
            orderItems: [
                { OrderID: 1, ItemID: 123, UserID: 42 },
                { OrderID: 2, ItemID: 124, UserID: 43 },
                { OrderID: 3, ItemID: 125, UserID: 44 }
            ],
            orders: [],
            users: [],
            items: [],
            households: []
        };
        
        mockFsSetup(mockData); 
    });

    afterAll(() => {
        server.close(); 
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should fetch order items", async () => {
        const response = await request(server).get("/orderItems");

        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            { OrderID: 1, ItemID: 123, UserID: 42 },
            { OrderID: 2, ItemID: 124, UserID: 43 },
            { OrderID: 3, ItemID: 125, UserID: 44 }
        ]);
    });
});