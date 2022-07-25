import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from 'libs/utils/constants';

/* ############### 이하 any로 작성한 타입 전부 수정할 것 ############### */

interface GetWithParams {
  url: string;
  config: any;
  callback: any;
}

export class HttpRequest {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
    });
  }

  async get(url: string) {
    const response = await this.axios.get(url);
    return response;
  }

  async getWithParams({ url = '', config = {}, callback }: GetWithParams) {
    const response = await this.axios.get(url, { params: config });
    callback(response);
  }

  async post(url: string, data: any) {
    const response = await this.axios.post(url, data);
    return response;
  }

  async delete(url: string) {
    const response = await this.axios.delete(url);
    return response;
  }

  async patch(url: string, data: any) {
    const response = await this.axios.patch(url, data);
    return response;
  }
}
