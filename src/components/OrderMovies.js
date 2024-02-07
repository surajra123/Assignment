import React from 'react';
import "./OrderMovies.css"

const OrderMovies = ({ orderBy, setOrderBy }) => {
  return (
    <div className='order-movies'>
      <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
        <option value="year">By Year</option>
        <option value="episode">By Episode</option>
      </select>
    </div>
  );
};

export default OrderMovies;
