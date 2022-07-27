/* eslint-disable consistent-return */
import React, { useEffect, useState, useRef } from 'react';
import { getWorkerInfo } from 'libs/api/admin';
import { Members } from 'libs/types/members';
import { HiOutlineSearch as SearchIcon } from 'react-icons/hi';

export default function SearchInput({ selectValue }: { selectValue: string }) {
  const [worker, setWorker] = useState<Members>();
  const [value, setValue] = useState('');
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const changeText = (selectedValue: string) => {
    let placeholderContent;
    switch (selectedValue) {
      case 'name':
        placeholderContent = '지원자명을 검색하세요';
        return placeholderContent;
      case 'gender':
        placeholderContent = "'여성' 또는 '남성'으로만 검색하세요";
        return placeholderContent;
      case 'birthday':
        placeholderContent = '예시) 2022.01.01';
        return placeholderContent;
      case 'transportation':
        placeholderContent =
          '버스, 지하철, 택시, KTX/기차, 도보, 자전거, 전동킥보드, 자가용';
        return placeholderContent;
      case 'address':
        placeholderContent = '시/도/군/구로 검색하세요';
        return placeholderContent;
    }
  };

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
        placeholder={changeText(selectValue)}
      />
      <button type="submit">
        <SearchIcon className="w-[20px] h-[20px] text-gray-400 mr-3" />
      </button>
    </form>
  );
}
