// /src/pages/CheckoutPage.jsx

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCheckoutData } from '/src/utils/getCheckoutData';
import { FaCcPaypal } from "react-icons/fa";

const CheckoutPage = ({ orderInfo }) => {
    const [orderUsers, setOrderUsers] = useState([]);
    const [deadline, setDeadline] = useState("");
    const { OrderId } = orderInfo;

    useEffect(() => {
        const fetchCheckoutData = async () => {
            try {
                const data = await getCheckoutData(OrderId);
                setOrderUsers(data.userData);
                setDeadline(data.deadline);
            } catch (error) {
                console.error("Error fetching checkout data:", error);
            }
        };

        fetchCheckoutData();
    }, [OrderId]);

    return (
        <div
            className='container-fluid py-2 overflow-hidden'
            style={style.container}
        >
            <h1 className='p-3'>Delivery due: {deadline}</h1>
            <div className='row flex-row flex-nowrap overflow-auto' style={style.users}>
                {orderUsers.map((orderUser, index) => (
                    <div
                        key={index}
                        className='card p-4'
                        style={style.cards}
                    >
                        <h3 className='card-title text-center'>{orderUser.Name}</h3>
                        <img
                            src={orderUser.Pic}
                            className='rounded-circle d-block mx-auto p-3'
                            style={style.userImage}
                            alt={`${orderUser.Name}'s profile`}
                        />
                        <h4 className='card-text text-center'>Total: £{(orderUser.Total).toFixed(2)}</h4>
                    </div>
                ))}
            </div>
            <button
                type='button'
                className='btn btn-success fw-bold shadow btn-lg mt-4 mx-auto d-block'
                style={style.checkoutButton}
                onClick={() => alert('Redirecting to payment service...')}
            >
                <FaCcPaypal style={style.paypalButton}/>
                Pay Your Share
            </button>
        </div>
    );
};

const style = {
    container: {
        marginTop: '80px',
    },
    users: {
        gap: '10px'
    },
    cards: {
        width: '300px',
        height: '350px',
        flex: '0 0 auto'
    },
    userImage: {
        width: '150px',
        height: '150px',
        objectFit: 'cover'
    },
    checkoutButton: {
        width: '200px',
    },
    paypalButton: {
        fontSize: '4em',
        padding: '10px'
    }
};

CheckoutPage.propTypes = {
    orderInfo: PropTypes.object.isRequired,
};

export default CheckoutPage;
