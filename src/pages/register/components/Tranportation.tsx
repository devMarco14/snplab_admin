import React from 'react';
import { TRANSPORTATION } from 'libs/utils/TRANSPORTATION';

interface transportationProps {
  transportation: string[];
  onChangeTransportationForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Transportation({
  transportation,
  onChangeTransportationForm,
}: transportationProps) {
  return (
    <div>
      <div className="mt-4 font-bold">주로 이용하는 교통 수단</div>
      <div className="mb-2 text-xs font-bold text-gray-400">
        주로 이용하는 교통수단을 모두 선택해 주세요.
      </div>
      <form className="flex flex-wrap w-11/12 mb-6">
        {TRANSPORTATION.map(({ id, item }) => (
          <label className="flex" key={id} htmlFor={item}>
            <div
              className={`flex h-7 mr-2 mt-1 rounded-3xl border border-solid 
          border-gray-300 px-2 ${
            transportation.includes(item)
              ? 'bg-gray-600 text-zinc-50'
              : 'text-gray-400'
          } items-center`}
            >
              {item}
            </div>
            <input
              className="hidden"
              type="checkbox"
              id={item}
              value={item}
              onChange={onChangeTransportationForm}
            />
          </label>
        ))}
      </form>
    </div>
  );
}

export default Transportation;
