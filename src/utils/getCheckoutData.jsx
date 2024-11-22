import Users from "/src/data/Users.json";
import Orders from "/src/data/Orders.json";
import Items from "/src/data/Items.json";
import OrderItems from "/src/data/OrderItems.json";

export function getCheckoutData(thisOrderID) {
    const order = Orders.find(o => o.OrderID === thisOrderID);
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
        const userOrderItems = OrderItems.filter(oi => oi.UserID === user.UserID && oi.OrderID === thisOrderID);
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