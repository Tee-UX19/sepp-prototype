// /src/utils/getItems.js

const getItems = async () => {
    try {
        const response = await fetch('http://localhost:4141/items'); 

        if (!response.ok) {
            console.error("Failed to fetch items. Status:", response.status);
            throw new Error("Failed to fetch items.");
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error; 
    }
};

export default getItems;
