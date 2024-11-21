import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const CheckoutPage = () => {

  const thisOrderID = 1;  // hardcoded right now, can be changed later maybe

  return (
    <div className='container-fluid py-2 overflow-hidden'>
      <h1 className='p-3'>Delivery due: {deadline}</h1>
      <div className='row flex-row flex-nowrap overflow-auto' style={style.users}>
      {orderUsers.map((orderUser, index) => (
        <div key={index} className='card p-4' style={style.cards}>
          <h3 className='card-title text-center'>{orderUser.name}</h3>
          <img 
            src={orderUser.profilePic}
            className='rounded-circle d-block mx-auto p-3'
            style={style.userImage}
          />
          <h4 className='card-text text-center'>Total: {orderUser.total}</h4>
        </div>
      ))}
      </div>
      <button
        type='button'
        className='btn btn-primary fw-bold shadow btn-lg mt-4 mx-auto p-4'
        onClick={() => alert('Redirecting to payment service...')}
      >
        Pay Your Share
      </button>
    </div>
  );
}


const style = {
    users: {
        gap:'10px'
    },
    cards: {
        width:'300px',
        height:'350px',
        flex:'0 0 auto'
    },
    userImage: {
        width: '150px',
        height: '150px',
        objectFit: 'cover'
    }
}

export default CheckoutPage;