import React, { useEffect, useState } from 'react';
import { getWorkerInfo } from 'libs/api/admin';
import { Members } from 'libs/types/members';

export default function SearchInput() {
  const [worker, setWorker] = useState<Members>();
  const [value, setValue] = useState('');

  const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    getWorkerInfo('name', value).then((data) => setWorker(data));
  }, [value]);

  //   console.log(worker);

  return (
    <input
      className="w-1/3 h-7 border border-solid border-black rounded-md ml-20"
      type="text"
      onChange={getValue}
    />
  );
}
