import SearchInput from '@/components/custom/SearchInput';
import { search } from '@/redux/action';
import React from 'react';
import { useDispatch } from 'react-redux';

const Index: React.FC = () => {
  const dispatch = useDispatch();

  function debounce<T>(func: (args: T) => void, delay: number) {
    let timeoutId: NodeJS.Timeout;

    return function (args: T) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(args);
      }, delay);
    };
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(search(e.target.value));
  }

  const debouncedSearch = debounce<React.ChangeEvent<HTMLInputElement>>(handleSearch, 1000);

  return (
    <div>
      <SearchInput placeholder="search for a book" onChange={debouncedSearch} />
    </div>
  );
};

export default Index;
