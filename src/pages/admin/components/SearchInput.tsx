import React, { useEffect, useState } from 'react';
import { getWorkerInfo } from 'libs/api/admin';
import { Members } from 'libs/types/members';

export default function SearchInput({ filter }: any) {
  const [worker, setWorker] = useState<Members>();
  const [value, setValue] = useState('');

  const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (value) {
      getWorkerInfo(filter, value).then((data) => setWorker(data));
    }
  }, [value, filter]);

  console.log(worker);

  return (
    <input
      className="w-1/3 h-7 border border-solid border-black rounded-md ml-20"
      type="text"
      onChange={getValue}
    />
  );
}
