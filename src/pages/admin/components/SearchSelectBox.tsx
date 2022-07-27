import React from 'react';
import { SearchFilter } from 'libs/types/members';
import SearchInput from './SearchInput';

interface searchSelectBoxProps {
  searchKey: string;
  getSearchKey: React.ChangeEventHandler<HTMLSelectElement>;
  searchValue: string;
  getSearchValue: any;
}

export default function SearchSelectBox({
  searchKey,
  getSearchKey,
  searchValue,
  getSearchValue,
}: searchSelectBoxProps) {
  const searchFilter: SearchFilter = {
    name: '지원자명',
    gender: '성별',
    birthday: '생년월일',
    transportation: '이용수단',
    address: '거주지',
  };

  return (
    <div className="min-w-[500px] h-10 flex justify-between content-center border border-solid border-black rounded-md">
      <select onChange={getSearchKey} value={searchKey} className="ml-1">
        {Object.keys(searchFilter).map((filter: string) => {
          return (
            <option key={filter} value={filter}>
              {searchFilter[filter]}
            </option>
          );
        })}
      </select>
      <SearchInput
        selectValue={searchKey}
        searchValue={searchValue}
        getSearchValue={getSearchValue}
      />
    </div>
  );
}
