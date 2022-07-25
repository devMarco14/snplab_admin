import React, { useState } from 'react';
import useAdminLoad from 'pages/admin/hook/useAdminLoad';
import { Round } from 'libs/types/round';
import useToggle from 'hooks/useToggle';
import { addComma } from 'libs/utils/addComma';
import {
  AiOutlinePlusSquare as AddIcon,
  AiOutlineRollback as ExitIcon,
} from 'react-icons/ai';
import useRoundHandler from '../hook/useRoundHandler';

export default function TabBox() {
  const [currentTab, setCurrentTab] = useState('1차');
  const { membersQuery } = useAdminLoad(currentTab);
  const { onPostRound, roundQuery, onChange, value } = useRoundHandler();
  const [isPlus, onTogglePlus] = useToggle();
  if (membersQuery.isError || roundQuery.isError) return <div>에러</div>;
  if (membersQuery.isLoading || roundQuery.isLoading) return <div>로딩중</div>;
  return (
    <>
      <div className="flex justify-center h-10 bg-gray-100">
        {roundQuery.data.map((item: Round) => (
          <div
            className={`flex items-center justify-center w-2/4 text-neutral-600 font-semibold ${
              currentTab === `${item.text}`
                ? 'bg-gray-200'
                : 'bg-gray-100  text-gray-300'
            }`}
            key={item.id}
          >
            <button type="button" onClick={() => setCurrentTab(item.text)}>
              {item.text} 모집
            </button>
          </div>
        ))}
        {isPlus && (
          <div className="flex items-center">
            <input
              className="h-5 border border-solid border-slate-300"
              type="text"
              value={value}
              onChange={onChange}
              placeholder="회차 변경"
            />
            <button
              className="w-8 bg-gray-400 h-5 rounded ml-1"
              type="button"
              onClick={() => onPostRound(value as string)}
            >
              추가
            </button>
          </div>
        )}

        <button
          type="button"
          className="text-3xl flex m-2 items-center leading-6 text-gray-700"
          onClick={onTogglePlus}
        >
          {isPlus ? <ExitIcon /> : <AddIcon />}
        </button>
      </div>
      <div>
        <table className="w-full ">
          <thead>
            <tr className="font-bold">
              <th className="w-1/12 pt-3">Num.</th>
              <th className="w-1/12">지원 날짜</th>
              <th className="w-1/12">지원자명</th>
              <th className="w-1/12">성별</th>
              <th className="w-1/12">생년월일</th>
              <th className="w-1/12">연락처</th>
              <th className="w-2/12">이메일</th>
              <th className="w-2/12">이용수단</th>
              <th className="w-1/12">거주지</th>
              <th className="w-1/12">당첨여부</th>
            </tr>
          </thead>
          <tbody>
            {membersQuery.data.map(
              ({
                address,
                birthday,
                cellular,
                email,
                gender,
                id,
                name,
                transportation,
                win,
              }) => (
                <tr className="text-center mt-4">
                  <td className="pt-2">{id}</td>
                  <td>2022.01.01</td>
                  <td>{name}</td>
                  <td>{gender}</td>
                  <td>{birthday}</td>
                  <td>
                    {cellular.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
                  </td>
                  <td>{email}</td>
                  <td className="flex flex-wrap justify-center truncate gap-1">
                    {transportation.map((item, index) => (
                      <div>
                        {addComma(index)} {item}
                      </div>
                    ))}
                  </td>
                  <td>{address}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
