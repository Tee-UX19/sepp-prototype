// /src/utils/getCartCount.js

const getCartCount = async (OrderInfo) => {
    try {
        const response = await fetch(`http://localhost:4141/orderItems`);

        if (!response.ok) {
            console.error(
                "Failed to fetch cart count. Status:",
                response.status
            );
            throw new Error("Failed to fetch cart count.");
        }

        const data = await response.json();
        const filteredData = data.filter((item) => {
            return (
                item.OrderID === OrderInfo.OrderID &&
                item.UserID === OrderInfo.UserID
            );
        });

        return filteredData.length;
    } catch (err) {
        console.error("Error fetching cart count:", err);
        throw err;
    }
};

export default getCartCount;
