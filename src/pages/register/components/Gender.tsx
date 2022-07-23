import React from 'react';

function Gender() {
  const genderStyle =
    'flex justify-center w-5 h-5 rounded-full border border-solid border-gray-300 text-gray-400 items-center';

  return (
    <div className="my-5">
      <div className="font-bold mb-4">성별</div>
      <label className="flex items-center" htmlFor="gender">
        <div className="flex-1 flex items-center mr-3">
          <div className={genderStyle}>✓</div>
          <input className="hidden" type="radio" id="gender" />
          <div className="ml-1 text-gray-400">남자</div>
        </div>
        <div className="flex-1 flex items-center">
          <div className={genderStyle}>✓</div>
          <input className="hidden" type="radio" id="gender" />
          <div className="ml-1 text-gray-400">여자</div>
        </div>
      </label>
    </div>
  );
}
export default Gender;
