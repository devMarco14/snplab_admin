import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import useRegionLists from 'pages/register/hooks/useRegionLists';
import useSubRegionLists from 'pages/register/hooks/useSubRegionLists';
import useDetectResize from 'pages/register/hooks/useDetectResize';
import RegionList from './RegionList';

interface SelectRegionProps {
  closeModal: (event: React.MouseEvent, selectedRegion?: string) => void;
  windowScrollLocation: number;
}

export default function SelectRegion({
  closeModal,
  windowScrollLocation,
}: SelectRegionProps) {
  const [currentRegion, setCurrentRegion] = React.useState<string>('');
  const [currentCity, setCurrentCity] = React.useState<string>('');
  const { regionList } = useRegionLists();
  const { subRegionList } = useSubRegionLists(currentRegion);
  const originalState = React.useMemo(() => [''], []);
  const regionLists = React.useRef<string[]>(originalState);
  const subRegionLists = React.useRef<string[]>(originalState);
  useDetectResize();

  React.useEffect(() => {
    if (regionList) {
      regionLists.current = originalState.concat(regionList.data.sort());
      setCurrentRegion(regionLists.current[1]);
    }
  }, [regionList, originalState]);

  React.useEffect(() => {
    if (subRegionList) {
      if (subRegionList.data.length !== 0) {
        subRegionLists.current = originalState.concat(
          subRegionList.data[0].subRegions.sort(),
        );
        setCurrentCity(subRegionLists.current[1]);
      }
    }
  }, [subRegionList, currentRegion, originalState]);

  const changeRegion = (value: string) => {
    setCurrentRegion(value);
  };

  const changeCity = (value: string) => {
    setCurrentCity(value);
  };

  function selectRegion(event: React.MouseEvent) {
    closeModal(event, `${currentRegion} ${currentCity}`);
  }

  return (
    <article className="absolute bottom-0 flex flex-col w-full h-3/5 bg-white small:w-[550px] small:h-[80%] small:modalChild">
      <section className="flex-center max-h-[7%] h-[7%] min-h-[3rem] px-5">
        <button
          type="button"
          id="region-close"
          className="absolute left-2 z-10 flex-center w-[30px] h-[30px]"
          onClick={closeModal}
        >
          <AiOutlineClose
            id="region-close-button"
            className="z-0 fill-grayFont text-2xl"
          />
        </button>
        <p className="w-full font-bold text-center text-base small:text-xl">
          거주지역 선택
        </p>
      </section>
      <hr className="border-grayFont" />
      <section className="flex-center w-full h-full overflow-hidden">
        <RegionList
          category="main"
          list={regionLists.current}
          current={currentRegion}
          setRegion={changeRegion}
        />
        <RegionList
          category="sub"
          list={subRegionLists.current}
          current={currentCity}
          setRegion={changeCity}
        />
      </section>
      <button
        type="button"
        id="region-submit"
        className="small:h-[7%] small:min-h-[50px] m-5 rounded-2xl bg-buttonActive font-bold text-white text-sm small:text-xl"
        onClick={selectRegion}
      >
        확인
      </button>
    </article>
  );
}
