import { Member } from 'types/interfaces';
import { HttpRequest } from './httpRequest';

const request = new HttpRequest();
export const postApplicantAPI = async (body: Member) => {
  const response = await request.post(`/members`, body);
  return response.data;
};
