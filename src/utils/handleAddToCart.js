// src/utils/handleAddToCart.js

const handleAddToCart = async (item, orderInfo, handleAddItemCounter) => {
    try {
        const response = await fetch("http://localhost:4141/orderItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                OrderID: orderInfo.OrderID,
                ItemID: item.ItemID,
                UserID: orderInfo.UserID,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to add item to cart.");
        }
        handleAddItemCounter();
        const newOrderItem = await response.json();
    } catch (error) {
        console.error("Error adding item to cart:", error);
    }
};

export default handleAddToCart;
