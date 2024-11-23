// backend/utils/getCartCount.js

const getCartCount = async () => {
    try {
        const response = await fetch("http://localhost:5000/orderItems/count");

        if (!response.ok) {
            console.error(
                "Failed to fetch cart count. Status:",
                response.status
            );
            throw new Error("Failed to fetch cart count.");
        }

        const data = await response.json();

        // Validate the response structure
        if (typeof data.count !== "number") {
            console.error("Invalid response format:", data);
            throw new Error("Invalid response format.");
        }

        console.log("Successfully fetched cart count:", data.count);
        return data.count;
    } catch (err) {
        console.error("Error fetching cart count:", err);
        throw err; // Re-throw the error to be handled by the caller
    }
};

export default getCartCount;
