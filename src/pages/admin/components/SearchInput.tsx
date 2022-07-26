/* eslint-disable consistent-return */
import React, { useEffect, useState, useRef } from 'react';
import { getWorkerInfo } from 'libs/api/admin';
import { Members } from 'libs/types/members';
import { HiOutlineSearch as SearchIcon } from 'react-icons/hi';

export default function SearchInput({ selectValue }: { selectValue: string }) {
  const [worker, setWorker] = useState<Members>();
  const [value, setValue] = useState('');
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const getInputValue = () => {
    if (inputRef) {
      const inputValue = inputRef.current.value;
      setValue(inputValue);
    }
  };

  // 데이터 불러와서 worker에 넣기
  useEffect(() => {
    if (selectValue) {
      getWorkerInfo(selectValue, value).then((data) => setWorker(data));
    }
  }, [value, selectValue]);

  // 엔터 눌렀을 때만 검색
  const pressEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      getInputValue();
    }
  };

  const clickButton = () => {
    getInputValue();
  };
  return (
    <form className="flex">
      <input
        className="w-[260px]"
        type="text"
        onKeyDown={pressEnter}
        ref={inputRef}
      />
      <button type="submit" onClick={clickButton}>
        <SearchIcon className="w-[20px] h-[20px] text-gray-400 mr-2" />
      </button>
    </form>
  );
}
