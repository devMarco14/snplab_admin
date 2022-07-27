import { useQuery } from '@tanstack/react-query';
import { getApplicantAPI } from 'libs/api/admin';
import { Members } from 'libs/types/members';

const useApplicantLoad = (round: string, pageNo: number) => {
  const membersQuery = useQuery<Members[]>(
    ['members', round, pageNo],
    () => getApplicantAPI(round, pageNo),
    {
      staleTime: 1000 * 5 * 60, // 데이터를 다시 받아오는 주기
      cacheTime: 1000 * 5 * 60, // 캐싱된 데이터를 유지하는 기간
    },
  );

  return membersQuery;
};

export default useApplicantLoad;
