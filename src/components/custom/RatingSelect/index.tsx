import React from 'react';
import Option from '@/components/base/Option';

interface SelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RatingSelect: React.FC<SelectProps> = ({ onChange }) => {
  return (
    <div>
      <label>Sort by rating:</label>
      <select onChange={onChange} className="bg-gray-300 rounded-md p-2">
        <Option value="random" label="Random" />
        <Option value="4-5" label="4 to 5" />
        <Option value="3-4" label="3 to 4" />
        <Option value="2-3" label="2 to 3" />
        <Option value="1-2" label="1 to 2" />
      </select>
    </div>
  );
};

export default RatingSelect;
