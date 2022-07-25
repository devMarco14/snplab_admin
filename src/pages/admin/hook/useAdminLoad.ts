import { useQuery } from '@tanstack/react-query';
import { getApplicantAPI } from 'libs/api/admin';
import { Members } from 'libs/types/members';

const useApplicantLoad = (round: string) => {
  const membersQuery = useQuery<Members[]>(
    ['members', round],
    () => getApplicantAPI(round),
    {
      staleTime: 1000 * 5 * 60,
      cacheTime: 1000 * 5 * 60,
    },
  );

  return { membersQuery };
};

export default useApplicantLoad;
