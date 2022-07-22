import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useInput from 'hooks/useInput';
import { getRoundAPI, postRoundAPI } from 'libs/api/admin';

const useRoundHandler = () => {
  const [value, onChange] = useInput('');

  const queryClient = useQueryClient();
  const roundQuery = useQuery(['round'], () => getRoundAPI(), {
    staleTime: 1000 * 5 * 60,
    cacheTime: 1000 * 5 * 60,
  });

  const { mutate: onPostRound } = useMutation(
    (body: string) =>
      postRoundAPI({
        id: Math.floor(Math.random() * 1000),
        text: body,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['round']);
      },
      onError: () => {
        // eslint-disable-next-line no-alert
        alert('회차 업데이트를 실패했습니다. 다시 시도해 주세요');
      },
    },
  );

  return { roundQuery, onPostRound, value, onChange };
};

export default useRoundHandler;
