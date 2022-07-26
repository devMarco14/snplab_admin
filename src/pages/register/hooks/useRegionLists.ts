import React from 'react';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { HttpRequest } from 'libs/api/httpRequest';

const useRegionLists = () => {
  const httpRequest = new HttpRequest();

  const { data } = useQuery<AxiosResponse>(
    ['region'],
    () => httpRequest.get('/regionList'),
    {
      staleTime: 1000 * 5 * 60,
      cacheTime: 1000 * 5 * 60,
    },
  );

  return { regionList: data };
};

export default useRegionLists;
