// tests/handleAddToCart.test.ts

import handleAddToCart from "../src/utils/handleAddToCart";

// Mock handleAddItemCounter to check if it's called
const mockHandleAddItemCounter = jest.fn();

// Mock data
const mockItem = { ItemID: 123 };
const mockOrderInfo = { OrderID: 1, UserID: 42 };

describe('handleAddToCart', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('should successfully add an item to the cart', async () => {
    // Mock successful fetch response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ OrderID: 1, ItemID: 123, UserID: 42 }),
      })
    ) as jest.Mock;

    // Call the function
    await handleAddToCart(mockItem, mockOrderInfo, mockHandleAddItemCounter);

    // Check if handleAddItemCounter was called
    expect(mockHandleAddItemCounter).toHaveBeenCalledTimes(1);

    // Check the console log output (if needed)
    // You can spy on // console.log if you want to test that as well
  });

  it('should handle an error when the fetch fails', async () => {
    // Mock failed fetch response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'Failed to add item' }),
      })
    ) as jest.Mock;

    // Call the function and catch the error
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await handleAddToCart(mockItem, mockOrderInfo, mockHandleAddItemCounter);

    // Check if the error was logged
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error adding item to cart:',
      new Error('Failed to add item')
    );

    // Clean up spy
    consoleErrorSpy.mockRestore();
  });
});
