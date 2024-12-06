const [orderItemsResponse, itemsResponse, usersResponse, ordersResponse] = await Promise.all([
    fetch("http://localhost:4141/orderItems"),
    fetch("http://localhost:4141/items"),
    fetch("http://localhost:4141/users"),
    fetch("http://localhost:4141/orders")
]);

if (!orderItemsResponse.ok) throw new Error("Failed to fetch order items.");
if (!itemsResponse.ok) throw new Error("Failed to fetch items.");
if (!usersResponse.ok) throw new Error("Failed to fetch users.");
if (!ordersResponse.ok) throw new Error("Failed to fetch orders.");

const OrderItems = await orderItemsResponse.json();
const Items = await itemsResponse.json();
const Users = await usersResponse.json();
const Orders = await ordersResponse.json();

export function getCheckoutData(orderID) {
    const order = Orders.find(o => o.thisOrderID === orderID);
    if(!order) {
        console.error("Order not found");
        return;
    }

    const { HouseID, deadline } = order;
    const householdUsers = Users.filter(user => user.HouseID === HouseID);
    const userData = householdUsers.map(user => ({
        UserID: user.UserID,
        Name: user.Name,
        Pic: user.Pic,
        Total: 0
    }));
    
    userData.forEach(user => {
        const userOrderItems = OrderItems.filter(oi => oi.UserID === user.UserID && oi.thisOrderID === orderID);
        user.Total = userOrderItems.reduce((sum, orderItem) => {
            const item = Items.find(i => i.ItemID === orderItem.ItemID);
            if (!item) {console.log("Item not found");}
            return sum + (item ? item.price : 0);
        }, 0);
    });

    return {
        userData,
        deadline
    };

}