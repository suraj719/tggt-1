import React from 'react';

interface SelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PriceSelect: React.FC<SelectProps> = ({ onChange }) => {
  return (
    <div>
      <label>Sort by price:</label>
      <select onChange={onChange} className="bg-gray-300 rounded-md p-2">
        <option value="random">Random</option>
        <option value="increasing">Increasing</option>
        <option value="decreasing">Decreasing</option>
      </select>
    </div>
  );
};

export default PriceSelect;