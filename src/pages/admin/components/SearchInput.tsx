/* eslint-disable consistent-return */
import React, { useEffect, useState, useRef } from 'react';
import { getWorkerInfo } from 'libs/api/admin';
import { Members } from 'libs/types/members';
import { HiOutlineSearch as SearchIcon } from 'react-icons/hi';
import { dynamicPlaceholder } from 'libs/utils/dynamicPlaceholder';

interface searchInputProps {
  selectValue: string;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({
  selectValue,
  searchValue,
  setSearchValue,
}: searchInputProps) {
  const [worker, setWorker] = useState<Members>();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const getInputValue = () => {
    if (inputRef) {
      const inputValue = inputRef.current.value;
      setSearchValue(inputValue);
    }
  };

  const getSearchResult = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    getInputValue();
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
