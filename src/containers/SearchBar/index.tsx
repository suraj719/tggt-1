
import SearchInput from '@/components/custom/SearchInput';
import { search } from '@/redux/action';
import React from 'react';
import { useDispatch } from 'react-redux';

const index: React.FC = () => {
  
  const dispatch = useDispatch()

  function debounce(func: any, delay: number) {
    let timeoutId: any;

    return function (...args: any) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(args);
      }, delay);
    };
  }
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>[]) {
    dispatch(search(e[0].target.value));
  }
  const debouncedSearch = debounce(handleSearch, 1000);

  return (
    <div>
        <SearchInput placeholder='search for a book' onChange={debouncedSearch} />
    </div>
  );
};

export default index;
