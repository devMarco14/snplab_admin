import React from 'react';
import SearchInput from './SearchInput';
import SearchSelectBox from './SearchSelectBox';

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <SearchSelectBox />
    </div>
  );
}
