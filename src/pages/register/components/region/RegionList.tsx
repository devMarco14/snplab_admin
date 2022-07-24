/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { processRegionName } from 'pages/register/utils';
import { throttler } from '../../utils';

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
  const [dynamicYCoordinate, setDynamicYCoordinate] = React.useState<number>(0);
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
          className="flex-center h-[24%] small:h-[25%] font-bold transition-all duration-300"
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

  function selectRegionByOnWheel(event: React.WheelEvent) {
    const regionList = list as string[];
    const sortedRegionList = regionList.sort();
    const processedDelta = event.deltaY < 0 ? -100 : 100;
    const absoluteIndex =
      (Math.abs(dynamicYCoordinate) + Math.abs(processedDelta)) / 100;
    const maximumLength = -100 * (regionList.length - 2);
    switch (true) {
      case processedDelta > 0 && dynamicYCoordinate > maximumLength:
        setDynamicYCoordinate(
          (previousYCoordinate) => previousYCoordinate - processedDelta,
        );
        setRegion(sortedRegionList[absoluteIndex + 1]);
        break;
      case processedDelta < 0 && dynamicYCoordinate < 0:
        setDynamicYCoordinate(
          (previousYCoordinate) => previousYCoordinate - processedDelta,
        );
        setRegion(sortedRegionList[absoluteIndex - 1]);
        break;
      default:
        setDynamicYCoordinate((previousYCoordinate) => previousYCoordinate);
        break;
    }
  }

  /* ############### 기능 개발중 ############### */
  const isMouseDown = React.useRef<boolean>(false);
  const startCoord = React.useRef<number>(0);
  const movementDistance = React.useRef<number>(0);

  function handleMouseDown(event: React.MouseEvent) {
    checkMouseDown(event);
    startCoord.current = event.clientY;
  }

  const checkMouseDown = (event: React.MouseEvent) => {
    if (event.type === 'mousedown') {
      isMouseDown.current = true;
    } else {
      isMouseDown.current = false;
    }
  };

  function handleMouseMove(event: React.MouseEvent) {
    if (isMouseDown.current) {
      updateDistanceThrottled(event);
    }
  }

  const updateDistanceThrottled = throttler(
    (event: React.MouseEvent) => updateMovementDistance(event),
    100,
  );

  const updateMovementDistance = (event: React.MouseEvent) => {
    const container = ulElement.current as HTMLElement;
    const firstElement = Array.from(container.children)[0] as HTMLElement;
    const elementHeight = firstElement.offsetHeight;
    const movedDistanceWithDirection = startCoord.current - event.clientY;
    const movementToIndex =
      movedDistanceWithDirection > 0
        ? Math.floor(movedDistanceWithDirection / elementHeight)
        : Math.ceil(movedDistanceWithDirection / elementHeight);
    movementDistance.current = movementToIndex;
  };

  function handleMouseUp(event: React.MouseEvent) {
    checkMouseDown(event);
    selectRegionByMouseMove(event);
  }

  const selectRegionByMouseMove = (event: React.MouseEvent) => {
    const regionList = list as string[];
    const sortedRegionList = regionList.sort();
    const indexToMove = movementDistance.current;
    const processedDelta = indexToMove * 100;
    const maximumLength = -100 * (regionList.length - 2);
    const movedDownwardDistance =
      dynamicYCoordinate - processedDelta < maximumLength
        ? maximumLength - (dynamicYCoordinate - processedDelta)
        : processedDelta;
    const movedUpwardDistance =
      dynamicYCoordinate - processedDelta > 0
        ? processedDelta - dynamicYCoordinate
        : processedDelta;
    const directionByProcessedDelta =
      processedDelta > 0 ? movedDownwardDistance : movedUpwardDistance;
    const absoluteIndex =
      Math.abs(dynamicYCoordinate - directionByProcessedDelta) / 100 + 1;
    switch (true) {
      case processedDelta > 0 && dynamicYCoordinate > maximumLength:
        setDynamicYCoordinate((prev) => prev - movedDownwardDistance);
        setRegion(sortedRegionList[absoluteIndex]);
        break;
      case processedDelta < 0 && dynamicYCoordinate < 0:
        setDynamicYCoordinate((prev) => prev - movedUpwardDistance);
        setRegion(sortedRegionList[absoluteIndex]);
        break;
      default:
        setDynamicYCoordinate((previousYCoordinate) => previousYCoordinate);
        break;
    }
  };

  /* ############### 기능 개발중 ############### */

  return (
    <section
      className="relative w-full h-full px-5"
      onWheel={selectRegionByOnWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
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
