const request = require("supertest");
const mockFsSetup = require("./mockFs");
const server = require("../backend/server"); 

jest.mock("fs");

describe("Server Tests with Mocked FS", () => {
    beforeAll(() => {
        const mockData = {
            orderItems: [],
            orders: [],
            users: [
                { UserID: 1, Name: "Test Person 1", Pic: "https://placehold.co/150", HouseID: 1 },
                { UserID: 2, Name: "Test Person 2", Pic: "https://placehold.co/150", HouseID: 2 },
                { UserID: 3, Name: "Test Person 3", Pic: "https://placehold.co/150", HouseID: 3 },
                { UserID: 4, Name: "Test Person 4", Pic: "https://placehold.co/150", HouseID: 4 }
            ],
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

    it("should fetch users", async () => {
        const response = await request(server).get("/users");

        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            { UserID: 1, Name: "Test Person 1", Pic: "https://placehold.co/150", HouseID: 1 },
            { UserID: 2, Name: "Test Person 2", Pic: "https://placehold.co/150", HouseID: 2 },
            { UserID: 3, Name: "Test Person 3", Pic: "https://placehold.co/150", HouseID: 3 },
            { UserID: 4, Name: "Test Person 4", Pic: "https://placehold.co/150", HouseID: 4 }
        ]);
    });
});