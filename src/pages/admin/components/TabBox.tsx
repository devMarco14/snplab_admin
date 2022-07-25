import React from 'react';
import useAdminLoad from 'pages/admin/hook/useAdminLoad';
import { Round } from 'libs/types/round';
import useToggle from 'hooks/useToggle';
import useRoundHandler from '../hook/useRoundHandler';

export default function TabBox() {
  const { membersQuery } = useAdminLoad('2차');
  const { onPostRound, roundQuery, onChange, value } = useRoundHandler();
  const [isPlus, onTogglePlus] = useToggle();
  if (membersQuery.isError || roundQuery.isError) return <div>에러</div>;
  if (membersQuery.isLoading || roundQuery.isLoading) return <div>로딩중</div>;

  return (
    <div className="flex justify-center h-10  bg-gray-100">
      {roundQuery.data.map((item: Round) => (
        <div
          className="flex items-center justify-center w-2/4 text-neutral-600 font-semibold"
          key={item.id}
        >
          {item.text} 모집
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
        className="text-3xl flex mr-2"
        onClick={onTogglePlus}
      >
        {isPlus ? '+' : 'x'}
      </button>
    </div>
  );
}
