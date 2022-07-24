import React from 'react';
import { HttpRequest } from 'libs/api/httpRequest';
import { AxiosResponse } from 'axios';

const useSubRegionLists = (currentRegion: string) => {
  const [subRegionList, setSubRegionList] = React.useState<AxiosResponse>();
  const httpRequest = new HttpRequest();

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
    getRegionLists();
  }, [currentRegion]);

  return { subRegionList };
};

export default useSubRegionLists;
