import SearchInput from '@/components/custom/SearchInput';
import { useSearch } from '@/hooks/useSearch';
import React from 'react';

const Index: React.FC = () => {
  const search = useSearch();

  return (
    <div>
      <SearchInput placeholder="search for a book" onChange={search} />
    </div>
  );
};

export default Index;
