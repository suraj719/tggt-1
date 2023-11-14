import React from 'react';
import Option from '@/components/base/Option';
interface SelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelect: React.FC<SelectProps> = ({ onChange }) => {
  return (
    <div>
      <label>Sort by category:</label>
      <select onChange={onChange} className="bg-gray-300 rounded-md p-2">
        <Option value="random" label="Random" />
        <Option value="Fiction" label="Fiction" />
        <Option value="Dystopian" label="Dystopian" />
        <Option value="Mystery" label="Mystery" />
        <Option value="Romance" label="Romance" />
      </select>
    </div>
  );
};

export default CategorySelect;
