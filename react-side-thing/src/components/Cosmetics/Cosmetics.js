import React, { useEffect, useState } from 'react';


const Cosmetics = () => {
const [cosmetics, setCosmetics] = useState();
useEffect(()=>{
  fetch('./cosmetics.json')
  .then(res => res.json())
  .then(data=>setCosmetics(data))
},[])
  return (
    <div>
      <h3>Shop my cosmetics</h3>
      {
        key={cosmetic.id}
        cosmetics.map(cosmetic => <Cosmetics cosmetic={cosmetic} ></Cosmetics>)
      }
    </div>
  );
};

export default Cosmetics;