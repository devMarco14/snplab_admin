import React, { useState } from 'react';
import { SearchFilter } from 'libs/types/members';
import SearchInput from './SearchInput';

export default function SearchSelectBox() {
  const [value, setValue] = useState<string>('');

  //   const searchFilter: SearchFilter = {
  //     name: '지원자명',
  //     gender: '성별',
  //     birthday: '생년월일',
  //     transportation: '이용수단',
  //     address: '거주지',
  //   };

  const filter = [
    { value: 'name', name: '지원자명' },
    { value: 'gender', name: '성별' },
    { value: 'birthday', name: '생년월일' },
    { value: 'transportation', name: '이용수단' },
    { value: 'address', name: '거주지' },
  ];

  const getValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    // <select>
    //   {Object.keys(searchFilter).map((filter: string) => {
    //     return <option value={filter}>{searchFilter[filter]}</option>;
    //   })}
    // </select>
    <div>
      <select onChange={getValue}>
        {filter.map((key) => (
          <option key={key.value} value={key.value}>
            {key.name}
          </option>
        ))}
      </select>
      <SearchInput filter={value} />
    </div>
  );
}
