import React from 'react';

interface GenderProps {
  genderChange: string | null;
  setGenderChange: (value: string) => void;
}

function Gender({ genderChange, setGenderChange }: GenderProps) {
  return (
    <div className="my-5">
      <div className="font-bold mb-4">성별</div>
      <div className="flex items-center">
        <div className="flex-1 flex items-center mr-3">
          <label
            className="flex justify-center text-gray-400 cursor-pointer items-center"
            htmlFor="genderSelectFemale"
          >
            <div
              className={`flex justify-center w-5 h-5 rounded-full mr-2 border border-solid border-gray-300 
    text-gray-400 items-center ${
      genderChange === '여자'
        ? 'bg-gray-600 text-zinc-50'
        : 'bg-zinc-50 text-gray-400'
    }`}
            >
              ✓
            </div>
            <span>여자</span>
            <input
              className="hidden"
              type="radio"
              id="genderSelectFemale"
              value="여자"
              name="genderSelect"
              checked={genderChange === '여자'}
              onChange={(e) => setGenderChange(e.target.value)}
            />
          </label>
        </div>
        <div className="flex-1 flex items-center">
          <label
            className="flex justify-center text-gray-400 cursor-pointer items-center"
            htmlFor="genderSelectMale"
          >
            <div
              className={`flex justify-center w-5 h-5 rounded-full mr-2 border border-solid border-gray-300 
     items-center ${
       genderChange === '남자'
         ? 'bg-gray-600 text-zinc-50'
         : 'bg-zinc-50 text-gray-400'
     }`}
            >
              ✓
            </div>
            <span>남자</span>
            <input
              className="hidden"
              type="radio"
              id="genderSelectMale"
              value="남자"
              name="genderSelect"
              checked={genderChange === '남자'}
              onChange={(e) => setGenderChange(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
export default Gender;
