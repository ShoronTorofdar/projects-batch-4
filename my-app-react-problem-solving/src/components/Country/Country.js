import React from 'react';
import './Country.css'

const Country = (props) => {
  console.log(props)
  return (
    <div className='country'>
      <h4>This is: {props.name}</h4>
      <p>Capital is:{props.capital} population: {props.population}</p>
    </div>
  );
};

export default Country;