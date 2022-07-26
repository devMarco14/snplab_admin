import React from 'react';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { HttpRequest } from 'libs/api/httpRequest';
import { debouncer } from '../utils';

const useSubRegionLists = (currentRegion: string) => {
  const [lastRegion, setLastRegion] = React.useState<string>(currentRegion);
  const httpRequest = new HttpRequest();

  React.useEffect(() => {
    if (currentRegion !== lastRegion) {
      debouncedRegionChange(currentRegion);
    }
  }, [currentRegion]);

  const debouncedRegionChange = React.useCallback(
    debouncer((value: string) => setLastRegion(value), 500),
    [],
  );

  const { data } = useQuery<AxiosResponse>(
    ['subregion', lastRegion],
    () => httpRequest.get(`/region?regionName=${lastRegion}`),
    {
      staleTime: 1000 * 5 * 60,
      cacheTime: 1000 * 5 * 60,
    },
  );

  return { subRegionList: data };
};

export default useSubRegionLists;
