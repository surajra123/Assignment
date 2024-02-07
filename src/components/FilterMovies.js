import React from 'react';
import "./FilterMovies.css"

const FilterMovies = ({ filterText, setFilterText }) => {
  return (
    <div className='filter'> 
      <input
        type="text"
        placeholder="Enter movie name"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{
            width: '100%',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid black',
            padding: '8px',
          }}
      />
    </div>
  );
};

export default FilterMovies;
