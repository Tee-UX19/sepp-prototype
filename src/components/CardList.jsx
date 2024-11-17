import React from 'react';
import './CardList.css';

const CardList = () => {
  const members = [
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
    { name: 'User', amountOwed: '$15', paid: '$10', profilePic: 'https://placehold.co/150'},
  ];

  return (
    <div className="card-list">
      {members.map((member, index) => (
        <div className="card" key={index}>
          <h2>{member.name}</h2>
          <img className="profile-pic" src={member.profilePic} alt={`${member.name}'s profile`} />
          <h3>Amount Owed: {member.amountOwed}</h3>
          <h3>Paid: {member.paid}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardList;