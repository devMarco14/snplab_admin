import React, { MouseEvent } from 'react';
import { Round } from 'libs/types/round';
import { addComma } from 'libs/utils/addComma';
import {
  AiOutlinePlusSquare as AddIcon,
  AiOutlineRollback as ExitIcon,
} from 'react-icons/ai';
import { Members } from 'libs/types/members';
import useToggle from 'hooks/useToggle';
import useRoundHandler from '../hook/useRoundHandler';

interface TabBoxProps {
  membersData: Members[];
  currentTab: string;
  onChangeTab: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function TabBox({
  onChangeTab,
  membersData,
  currentTab,
}: TabBoxProps) {
  const { onPostRound, roundQuery, onChange, value } = useRoundHandler();
  const [isPlus, onTogglePlus] = useToggle();
  if (roundQuery.isError) return <div>에러</div>;
  if (roundQuery.isLoading) return <div>로딩중</div>;
  return (
    <div>
      <div className="flex justify-center h-10 bg-gray-100">
        {roundQuery.data.map((item: Round, roundIndex: number) => (
          <div
            className={`flex items-center justify-center w-2/4 text-neutral-600 font-semibold ${
              currentTab === `${item.text}`
                ? 'bg-gray-200'
                : 'bg-gray-100  text-gray-300'
            }`}
            key={item.id + roundIndex}
          >
            <button type="button" onClick={onChangeTab} value={item.text}>
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
              onClick={() => {
                onPostRound(value as string);
                onTogglePlus();
              }}
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

      <table className="w-full mt-3">
        <thead>
          <tr className="h-14 ">
            <th className="w-1/12">Num.</th>
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
          {membersData.map(
            (
              {
                address,
                birthday,
                cellular,
                email,
                gender,
                id,
                name,
                transportation,
                win,
              },
              memberIndex,
            ) => (
              <tr
                className="text-center align-middle mt-4 h-14"
                key={id + memberIndex}
              >
                <td>{id}</td>
                <td>2022.01.01</td>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{birthday}</td>
                <td>{cellular.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}</td>
                <td>{email}</td>
                <td className="flex flex-wrap justify-center truncate gap-1">
                  {transportation.map((item, index) => (
                    <div key={item + index}>
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
  );
}
