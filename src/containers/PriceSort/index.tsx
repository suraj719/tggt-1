import PriceSelect from '@/components/custom/PriceSelect';
import { sortPrice } from '@/redux/action';
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

const index: React.FC = () => {
  
  const dispatch = useDispatch()
  const handlePrice = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortPrice(e.target.value));
  };
  return (
    <div>
      <PriceSelect onChange={handlePrice} />
    </div>
  );
};

export default index;
