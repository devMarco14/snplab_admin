import { Round } from 'libs/types/round';
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

export const getWorkerInfo = async (key: string, value: string) => {
  const response = await request.get(`/members?${key}_like=${value}`);
  return response.data;
};
