import { HttpRequest } from './httpRequest';

const request = new HttpRequest();
export const getApplicantAPI = async (round: string) => {
  const response = await request.get(`/members?round=${round}`);
  return response.data;
};

export const getRoundAPI = async () => {
  const response = await request.get(`/round`);
  return response.data;
};

export const postRoundAPI = async (body: { id: number; text: string }) => {
  const response = await request.post(`/round`, body);
  return response.data;
};
