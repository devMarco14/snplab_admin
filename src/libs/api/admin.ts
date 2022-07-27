import { Round } from 'libs/types/round';
import { Member } from 'types/interfaces';
import { HttpRequest } from './httpRequest';

const request = new HttpRequest();
export const getApplicantAPI = async (round: string, pageNo: number) => {
  const response = await request.get(
    `/members?round=${round}&_page=${pageNo}&_limit=10`,
  );
  return response.data;
};

export const getRoundAPI = async () => {
  const response = await request.get(`/round`);
  return response.data;
};

export const postRoundAPI = async (body: Round) => {
  const response = await request.post(`/round`, body);
  return response.data;
};

export const patchMemberAPI = async (id: string, body: Partial<Member>) => {
  const response = await request.patch(`/members/${id}`, body);
  return response.data;
};
