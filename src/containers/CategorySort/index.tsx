import { sortCategory } from '@/redux/action';
import React from 'react';
import { useDispatch } from 'react-redux';
import CategorySelect from '@/components/custom/CategorySelect';

const index: React.FC = () => {
  const dispatch = useDispatch();
  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortCategory(event.target.value));
  };

  return (
    <div>
      <CategorySelect onChange={handleCategory} />
    </div>
  );
};

export default index;
