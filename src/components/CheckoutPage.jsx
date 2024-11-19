import React from 'react';
import './CheckoutPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const CheckoutPage = () => {

  const members = [
    { name: 'User1 (YOU)', amountOwed: '£15', amountPaid: '£10', profilePic: 'https://placehold.co/150'},
    { name: 'User2', amountOwed: '£15', amountPaid: '£10', profilePic: 'https://placehold.co/150'},
    { name: 'User3', amountOwed: '£15', amountPaid: '£10', profilePic: 'https://placehold.co/150'},
    { name: 'User4', amountOwed: '£15', amountPaid: '£10', profilePic: 'https://placehold.co/150'},
    { name: 'User5', amountOwed: '£15', amountPaid: '£10', profilePic: 'https://placehold.co/150'},
    { name: 'User6', amountOwed: '£15', amountPaid: '£10', profilePic: 'https://placehold.co/150'},
    { name: 'User7', amountOwed: '£15', amountPaid: '£10', profilePic: 'https://placehold.co/150'},
  ];

  return (
    <div className='container-fluid py-2 overflow-hidden'>
      <h1>Delivery due: Tuesday 1pm</h1>
      <div className='row flex-row flex-nowrap overflow-auto' style={{gap:'10px'}}>
      {members.map((member, index) => (
        <div key={index} className='card p-4' style={{ width:'300px', height:'350px', flex:'0 0 auto'}}>
          <h2 className='card-title text-center'>{member.name}</h2>
          <img 
            src={member.profilePic}
            className='rounded-circle d-block mx-auto p-3'
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h3 className='card-text text-center'>Total: {member.amountOwed}</h3>
          <h3 className='card-text text-center'>Paid: {member.amountPaid}</h3>
        </div>
      ))}
      </div>
    </div>
  );
}

export default CheckoutPage;