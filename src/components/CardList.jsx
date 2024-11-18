import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardList = () => {
  const members = [
    { name: 'User (YOU)', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
  ];

  return (
    <div className="container" style={{ minHeight: '400px', minWidth:'75%'}}>
      <div className="row flex-nowrap overflow-auto">
      {members.map((member, index) => (
        <div key={index} className="col-10 col-md-4 col-lg-4">
        <div className="card mb-4" style={{ minHeight: '400px' }}>
          <div className="card-body">
            <h2 className="card-title">{member.name}</h2>
            <img src={member.profilePic} alt={`${member.name}'s profile`} className="rounded-circle mx-auto d-block p-2" 
            style={{ width: '150px', height: '150px', objectFit: 'cover'}}
          />
            <p className="card-text">
              <strong>Amount Owed:</strong> {member.amountOwed}
            </p>
            <p className="card-text">
              <strong>Paid:</strong> {member.paid}
            </p>
          </div>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default CardList;