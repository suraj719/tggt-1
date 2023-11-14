import React from "react";

interface SearchProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchProps> = ({ placeholder, onChange }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="search"
        className="bg-gray-300 py-3 px-5 rounded-md"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
