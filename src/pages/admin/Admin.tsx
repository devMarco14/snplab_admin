import React from 'react';
import SearchInput from './components/SearchInput';

export default function Admin() {
  return (
    <div>
      <header>
        <p className="h-5 bg-black text-white font-bold">메인</p>
      </header>
      <div className="absolute top-5 w-1/12 h-screen bg-gray-300"> </div>
      <h1 className="font-bold text-xl ml-20 mt-3">
        {' '}
        학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황
      </h1>
      <section>
        {/* <label htmlFor="search">검색</label> */}
        <div className="flex justify-between">
          <SearchInput />

          {/* <input
              id="search"
              type="text"
              className="w-1/3 h-7 border border-solid border-black rounded-md ml-20"
            /> */}
          <button type="button" className="w-32 h-10 bg-gray-300 rounded-md">
            엑셀 다운로드
          </button>
        </div>
        <section className="w-11/12 h-screen bg-gray-400 ml-20 mt-5 mb-5">
          목록입니다.
        </section>
      </section>
    </div>
  );
}
