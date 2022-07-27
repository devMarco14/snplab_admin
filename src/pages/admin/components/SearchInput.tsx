/* eslint-disable consistent-return */
import React, { useEffect, useState, useRef } from 'react';
import { getWorkerInfo } from 'libs/api/admin';
import { Members } from 'libs/types/members';
import { HiOutlineSearch as SearchIcon } from 'react-icons/hi';
import { dynamicPlaceholder } from 'libs/utils/dynamicPlaceholder';

export default function SearchInput({ selectValue }: { selectValue: string }) {
  const [worker, setWorker] = useState<Members>();
  const [value, setValue] = useState('');
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (selectValue) {
      getWorkerInfo(selectValue, value).then((data) => setWorker(data));
    }
  }, [value, selectValue]);

  const getInputValue = () => {
    if (inputRef) {
      const inputValue = inputRef.current.value;
      setValue(inputValue);
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
