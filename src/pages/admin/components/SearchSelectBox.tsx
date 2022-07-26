import React, { useState } from 'react';
import { SearchFilter } from 'libs/types/members';
import SearchInput from './SearchInput';

export default function SearchSelectBox() {
  const [key, setKey] = useState<string>('name');

  const searchFilter: SearchFilter = {
    name: '지원자명',
    gender: '성별',
    birthday: '생년월일',
    transportation: '이용수단',
    address: '거주지',
  };

  const getValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setKey(event.target.value);
  };

  return (
    <div className="min-w-96 flex justify-between content-center border border-solid border-black rounded-md">
      <div>
        <select onChange={getValue} value={key} className="mt-2">
          {Object.keys(searchFilter).map((filter: string) => {
            return (
              <option key={filter} value={filter}>
                {searchFilter[filter]}
              </option>
            );
          })}
        </select>
      </div>
      <SearchInput selectValue={key} />
    </div>
  );
}
