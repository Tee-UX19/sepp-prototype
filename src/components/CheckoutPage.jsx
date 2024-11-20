import React from 'react';
import members from '../data/Members.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const CheckoutPage = () => {

  const deadline = 'Thursday 21st November, 17:00'

  return (
    <div className='container-fluid py-2 overflow-hidden'>
      <h1 className='p-3'>Delivery due: {deadline}</h1>
      <div className='row flex-row flex-nowrap overflow-auto m-2' style={{gap:'10px'}}>
      {members.map((member, index) => (
        <div key={index} className='card p-4' style={{ width:'300px', height:'350px', flex:'0 0 auto'}}>
          <h3 className='card-title text-center'>{member.name}</h3>
          <img 
            src={member.profilePic}
            className='rounded-circle d-block mx-auto p-3'
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h4 className='card-text text-center'>Total: {member.amountOwed}</h4>
          <h4 className='card-text text-center'>Paid: {member.amountPaid}</h4>
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

export default CheckoutPage;