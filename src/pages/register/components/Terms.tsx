import React from 'react';

function Terms() {
  const termsStyle = 'flex justify-center w-5 h-5 text-gray-400 items-center';
  return (
    <div className="flex-col">
      <label className="flex-cl items-center" htmlFor="ckeckBox">
        <div className="flex mr-3 mb-4 items-center">
          <div
            className="flex justify-center w-5 h-5 rounded-full border border-solid 
          border-gray-300 text-gray-400 items-center"
          >
            ✓
          </div>
          <input className="hidden" type="radio" id="ckeckBox" />
          <div className="ml-1 text-gray-400">이용약관 모두 동의</div>
        </div>
        <div className="w-full mb-4 border-b border-solid border-black" />
        <div className="flex items-center mb-4">
          <div className={termsStyle}>✓</div>
          <input className="hidden" type="radio" id="ckeckBox" />
          <div className="ml-1 text-gray-400">개인정보 처리방침 고지(필수)</div>
        </div>
        <div className="flex items-center mb-4">
          <div className={termsStyle}>✓</div>
          <input className="hidden" type="radio" id="ckeckBox" />
          <div className="ml-1 text-gray-400">제3자 정보제공 동의(필수)</div>
        </div>
      </label>
    </div>
  );
}

export default Terms;
