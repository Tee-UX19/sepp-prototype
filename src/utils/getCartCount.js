// backend/utils/getCartCount.js
// ?UserID=${OrderInfo.UserID} {process.env.API_BASE_URL}

const getCartCount = async (OrderInfo) => {
    try {
        const response = await fetch(`http://localhost:5000/orderItems`);

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

        if (1) {
            console.log(filteredData);
        }

        console.log("Successfully fetched cart count:", filteredData.length);
        return filteredData.length;
    } catch (err) {
        console.error("Error fetching cart count:", err);
        throw err; // Re-throw the error to be handled by the caller
    }
};

export default getCartCount;
