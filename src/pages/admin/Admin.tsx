import React, { MouseEvent, useState } from 'react';
import { CSVLink } from 'react-csv';
import TabBox from './components/TabBox';
import useAdminLoad from './hook/useAdminLoad';

export default function Admin() {
  const headers = [
    { label: 'Num.', key: 'id' },
    { label: '지원 날짜', key: '?' },
    { label: '지원자명', key: 'name' },
    { label: '성별', key: 'gender' },
    { label: '생년월일', key: 'birthday' },
    { label: '연락처', key: 'cellular' },
    { label: '이메일', key: 'email' },
    { label: '이용수단', key: 'transportation' },
    { label: '거주지', key: 'address' },
    { label: '당첨여부', key: 'win' },
  ];
  const [currentTab, setCurrentTab] = useState('1차');
  const onChangeTab = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(e.currentTarget.value);
  };
  const {
    data: membersData,
    isError: isMembersError,
    isLoading: isMemberLoading,
  } = useAdminLoad(currentTab);

  if (isMembersError) return <div>에러</div>;
  if (isMemberLoading) return <div>로딩중</div>;
  return (
    <div>
      <header>
        <p className="h-5 bg-black text-white font-bold">메인</p>
      </header>
      {/* <div className="absolute top-5 w-1/12 h-screen bg-gray-300"> </div> */}
      <h1 className="font-bold text-xl ml-20 mt-3">
        학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황
      </h1>
      <section>
        {/* <label htmlFor="search">검색</label> */}
        <div className="flex justify-between">
          <input
            id="search"
            type="text"
            className="w-1/3 h-7 border border-solid border-black rounded-md ml-20"
          />

          <CSVLink
            className="w-32 h-10 bg-gray-300 rounded-md"
            data={membersData}
            headers={headers}
            filename="SNPLab 지원자 리스트"
          >
            <button type="button" className="w-32 h-10 bg-gray-300 rounded-md">
              액셀 다운로드
            </button>
          </CSVLink>
        </div>
        <section className="w-11/12 h-screen bg-gray-200 ml-20 mt-5 mb-5">
          <TabBox
            onChangeTab={onChangeTab}
            membersData={membersData}
            currentTab={currentTab}
          />
        </section>
      </section>
    </div>
  );
}
