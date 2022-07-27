/* eslint-disable consistent-return */
import React, { useEffect, useState, useRef } from 'react';
import { HiOutlineSearch as SearchIcon } from 'react-icons/hi';
import { dynamicPlaceholder } from 'libs/utils/dynamicPlaceholder';

interface searchInputProps {
  selectValue: string;
  searchValue: string;
  getSearchValue: any;
}

export default function SearchInput({
  selectValue,
  searchValue,
  getSearchValue,
}: searchInputProps) {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const getSearchResult = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (inputRef) {
      const inputValue = inputRef.current.value;
      getSearchValue(inputValue);
    }
  };

  return (
    <form className="flex" onSubmit={getSearchResult}>
      <input
        className="pl-2 w-[400px]"
        type="text"
        ref={inputRef}
        placeholder={dynamicPlaceholder(selectValue)}
      />
      <button type="submit">
        <SearchIcon className="w-[20px] h-[20px] text-gray-400 mr-3" />
      </button>
    </form>
  );
}
