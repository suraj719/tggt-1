import React from 'react';

interface SelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelect: React.FC<SelectProps> = ({ onChange }) => {
  return (
    <div>
      <label>Sort by category:</label>
      <select onChange={onChange} className="bg-gray-300 rounded-md p-2">
        <option value="random">Random</option>
        <option value="Fiction">Fiction</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
      </select>
    </div>
  );
};

export default CategorySelect;