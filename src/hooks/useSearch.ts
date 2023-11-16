import { search } from '@/redux/action';
import { useDispatch } from 'react-redux';

export function useSearch() {
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
  return debouncedSearch;
}
