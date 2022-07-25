import React from 'react';
import { HttpRequest } from 'libs/api/httpRequest';
import { AxiosResponse } from 'axios';

const useRegionLists = () => {
  const [regionList, setRegionList] = React.useState<AxiosResponse>();
  const httpRequest = new HttpRequest();

  React.useEffect(() => {
    const getRegionLists = async () => {
      try {
        const response = await httpRequest.get('/regionList');
        setRegionList(response);
      } catch (error) {
        console.log(error);
      }
    };
    getRegionLists();
  }, []);

  return { regionList };
};

export default useRegionLists;
