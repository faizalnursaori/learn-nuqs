"use client";

import { useQueryState } from "nuqs";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useQueryState("keyword");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    onSearch(value);
  };

  const handleClear = () => {
    setKeyword(null);
    onSearch("");
  };

  return (
    <div>
      <input value={keyword || ""} onChange={handleChange} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
