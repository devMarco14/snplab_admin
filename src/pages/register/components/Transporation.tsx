import React from 'react';
import { TRANSPORATION } from 'libs/utils/TRANSPORATION';

function Transporation() {
  return (
    <div>
      <div className="font-bold">주로 이용하는 교통 수단</div>
      <div className="mb-2 text-xs font-bold text-gray-400">
        주로 이용하는 교통수단을 모두 선택해 주세요.
      </div>
      <form className="flex flex-wrap w-11/12 mb-6">
        {TRANSPORATION.map(({ item, id }) => (
          <label className="flex" key={id} htmlFor="transporation">
            <div
              className="flex h-7 mr-2 mt-1 rounded-3xl border border-solid 
          border-gray-300 px-2 text-gray-400 items-center"
            >
              {item}
            </div>
            <input className="hidden" type="checkbox" id="transporation" />
          </label>
        ))}
      </form>
    </div>
  );
}

export default Transporation;
