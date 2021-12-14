import React from 'react';

const Cosmetic = (props) => {
  console.log(props.cosmetic)
  const {name, price, dob} = props.cosmetic;
  const handlePurchase = id =>{
    // set to local storage
    console.log(id);
  }
  return (
    <div>
      <h2>name:{name}</h2>
      <p>Price: ${price}</p>
      <p> <small>Gender:{dob}</small> </p>
      <button onClick = {handlePurchase}>Purchase</button>
    </div>
  );
};

export default Cosmetic; 