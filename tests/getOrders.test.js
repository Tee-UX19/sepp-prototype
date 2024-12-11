const request = require("supertest");
const mockFsSetup = require("./mockFs");
const server = require("../backend/server"); 

jest.mock("fs");

describe("Server Tests with Mocked FS", () => {
    beforeAll(() => {
        const mockData = {
            orderItems: [],
            orders: [
                { OrderID: 1, HouseID: 1, deadline: "2024-12-11" },
                { OrderID: 2, HouseID: 2, deadline: "2024-12-12" },
                { OrderID: 3, HouseID: 3, deadline: "2024-12-13" },
                { OrderID: 4, HouseID: 4, deadline: "2024-12-14" }
            ],
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

    it("should fetch orders", async () => {
        const response = await request(server).get("/orders");

        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            { OrderID: 1, HouseID: 1, deadline: "2024-12-11" },
            { OrderID: 2, HouseID: 2, deadline: "2024-12-12" },
            { OrderID: 3, HouseID: 3, deadline: "2024-12-13" },
            { OrderID: 4, HouseID: 4, deadline: "2024-12-14" }
        ]);
    });
});