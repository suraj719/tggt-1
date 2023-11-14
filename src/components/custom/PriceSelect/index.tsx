import React from 'react';
import Option from '@/components/base/Option';

interface SelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PriceSelect: React.FC<SelectProps> = ({ onChange }) => {
  return (
    <div>
      <label>Sort by price:</label>
      <select onChange={onChange} className="bg-gray-300 rounded-md p-2">
        <Option value="random" label="Random" />
        <Option value="increasing" label="Increasing" />
        <Option value="decreasing" label="Decreasing" />
      </select>
    </div>
  );
};

export default PriceSelect;
