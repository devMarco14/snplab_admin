import React from 'react';
import { HttpRequest } from 'libs/api/httpRequest';
import { AxiosResponse } from 'axios';
import { debouncer } from '../utils';

const useSubRegionLists = (currentRegion: string) => {
  const [subRegionList, setSubRegionList] = React.useState<AxiosResponse>();
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

  React.useEffect(() => {
    const getRegionLists = async () => {
      try {
        const response = await httpRequest.get(
          `/region?regionName=${currentRegion}`,
        );
        setSubRegionList(response);
      } catch (error) {
        console.log(error);
      }
    };

    if (lastRegion !== '') {
      getRegionLists();
    }
  }, [lastRegion]);

  return { subRegionList };
};

export default useSubRegionLists;
