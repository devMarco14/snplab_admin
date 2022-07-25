/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { processRegionName } from 'pages/register/utils';
import useAnimate from 'pages/register/hooks/useAnimate';

interface RegionListProps {
  category: string;
  list: string[];
  current: string;
  setRegion: (value: string) => void;
}

export default function RegionList({
  category,
  list,
  current,
  setRegion,
}: RegionListProps) {
  const {
    dynamicYCoordinate,
    setDynamicYCoordinate,
    selectRegionByOnWheel,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useAnimate(list, setRegion);
  const ulElement = React.useRef<HTMLUListElement | null>(null);
  const headerCategory = category === 'main' ? '시/도' : '시/군/구';

  React.useEffect(() => {
    if (ulElement.current) {
      const lis = Array.from(ulElement.current.children);
      const processedCurrent =
        category === 'main' ? processRegionName(current as string) : current;
      lis.forEach((li: Element) => {
        const htmlLi = li as HTMLElement;
        if (htmlLi.innerText === processedCurrent && processedCurrent !== '') {
          htmlLi.classList.remove('deSelectedItem');
          htmlLi.classList.add('selectedItem');
        } else {
          htmlLi.classList.remove('seletedItem');
          htmlLi.classList.add('deSelectedItem');
        }
      });
    }
  }, [current, category]);

  React.useEffect(() => {
    setDynamicYCoordinate(0);
  }, [list]);

  const returnNormalList = (regionList: string[]) =>
    regionList.map((region: string, index: number) => {
      return (
        <li
          key={`${region[0]}_${index}`}
          className="flex-center h-[24%] small:h-[25%] font-bold transition-all duration-100 ease-linear"
          style={{
            transform: `translateY(${dynamicYCoordinate}%)`,
          }}
        >
          {region}
        </li>
      );
    });

  const returnProcessedList = (regionList: string[]) => {
    const listWithProcessedName = regionList.map((regionName: string) =>
      processRegionName(regionName),
    );
    return returnNormalList(listWithProcessedName);
  };

  return (
    <section
      className="relative w-full h-full px-5"
      onWheel={selectRegionByOnWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      onTouchCancel={handleMouseUp}
    >
      <h2 className="flex-center h-1/5 w-full text-base small:text-2xl font-bold">
        {headerCategory}
      </h2>
      <ul
        ref={ulElement}
        className="h-full w-full pt-[15px] small:pt-[25px] overflow-hidden cursor-grab active:cursor-grabbing select-none"
      >
        {category === 'main'
          ? returnProcessedList(list as string[])
          : returnNormalList(list as string[])}
      </ul>
    </section>
  );
}
