jest.mock("../backend/server.js", () => jest.fn());

const request = require("supertest");
const mockFileSystem = require("./mockFileSystem");

describe("Server Tests with Mocked FS", () => {
    beforeAll(() => {
        mockFileSystem();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should fetch order items", async () => {
        const response = await request(app).get("/orderItems");

        expect(response.status).toBe(200);

        expect(response.body).toEqual([
            { OrderID: 1, ItemID: 123, UserID: 42 },
            { OrderID: 2, ItemID: 124, UserID: 43 },
            { OrderID: 3, ItemID: 125, UserID: 44 }
        ]);
    });

});