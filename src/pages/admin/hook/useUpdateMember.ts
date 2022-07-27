import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchMemberAPI } from 'libs/api/admin';

const useUpdateMember = () => {
  const queryClient = useQueryClient();
  const { mutate: onPutWin } = useMutation(
    ({ id, isWin }: { id: string; isWin: boolean }) =>
      patchMemberAPI(id, { win: !isWin }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['members']);
      },
      onError: () => {
        // eslint-disable-next-line no-alert
        alert('당첨여부 업데이트를 실패했습니다. 다시 시도해 주세요');
      },
    },
  );
  return { onPutWin };
};

export default useUpdateMember;
