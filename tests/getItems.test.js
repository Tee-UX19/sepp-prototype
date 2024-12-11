const request = require("supertest");
const mockFsSetup = require("./mockFs");
const server = require("../backend/server"); 

jest.mock("fs");

describe("Server Tests with Mocked FS", () => {
    beforeAll(() => {
        const mockData = {
            orderItems: [],
            orders: [],
            users: [],
            items: [
                {
                    "ItemID": 1,
                    "name": "Gala Apples",
                    "subtitle": "Crisp and Sweet",
                    "category": "Fruits",
                    "price": 1.99,
                    "image": "https://images.pexels.com/photos/3746517/pexels-photo-3746517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "unit": "1 lb",
                    "description": "Crisp and sweet apples, perfect for snacking or baking.",
                    "brand": "Brand A",
                    "inStock": true,
                    "onSale": false,
                    "newArrivals": false,
                    "productInformation": {
                        "hasNutrition": true,
                        "ingredients": ["Gala apples"],
                        "allergens": [],
                        "nutritional": {
                            "energy": { "per100ml": "218 kJ", "per150ml": "327 kJ", "RI": "4%" },
                            "energyCal": { "per100ml": "52 kcal", "per150ml": "78 kcal", "RI": "4%" },
                            "fats": { "per100ml": "0.2 g", "per150ml": "0.3 g", "RI": "0%" },
                            "saturatedFat": { "per100ml": "0.0 g", "per150ml": "0.0 g", "RI": "0%" },
                            "carbohydrates": { "per100ml": "14 g", "per150ml": "21 g", "RI": "8%" },
                            "sugars": { "per100ml": "10 g", "per150ml": "15 g", "RI": "17%" },
                            "fibres": { "per100ml": "2.4 g", "per150ml": "3.6 g", "RI": "12%" }
                        }
                    }
                }
            ],
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

    it("should fetch items", async () => {
        const response = await request(server).get("/items");

        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            {
                ItemID: 1,
                name: "Gala Apples",
                subtitle: "Crisp and Sweet",
                category: "Fruits",
                price: 1.99,
                image: "https://images.pexels.com/photos/3746517/pexels-photo-3746517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                unit: "1 lb",
                description: "Crisp and sweet apples, perfect for snacking or baking.",
                brand: "Brand A",
                inStock: true,
                onSale: false,
                newArrivals: false,
                productInformation: {
                    hasNutrition: true,
                    ingredients: ["Gala apples"],
                    allergens: [],
                    nutritional: {
                        energy: { per100ml: "218 kJ", per150ml: "327 kJ", RI: "4%" },
                        energyCal: { per100ml: "52 kcal", per150ml: "78 kcal", RI: "4%" },
                        fats: { per100ml: "0.2 g", per150ml: "0.3 g", RI: "0%" },
                        saturatedFat: { per100ml: "0.0 g", per150ml: "0.0 g", RI: "0%" },
                        carbohydrates: { per100ml: "14 g", per150ml: "21 g", RI: "8%" },
                        sugars: { per100ml: "10 g", per150ml: "15 g", RI: "17%" },
                        fibres: { per100ml: "2.4 g", per150ml: "3.6 g", RI: "12%" }
                    }
                }
            }
        ]);
    });
});