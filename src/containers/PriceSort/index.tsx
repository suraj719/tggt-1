import PriceSelect from '@/components/custom/PriceSelect';
import { sortPrice } from '@/redux/action';
import React from 'react';
import { useDispatch } from 'react-redux';

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const handlePrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortPrice(e.target.value));
  };
  return (
    <div>
      <PriceSelect onChange={handlePrice} />
    </div>
  );
};

export default Index;
