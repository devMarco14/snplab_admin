import React from 'react';
import { throttler } from '../utils';

const useAnimate = (list: string[], setRegion: (value: string) => void) => {
  const [dynamicYCoordinate, setDynamicYCoordinate] = React.useState<number>(0);
  const isMouseDown = React.useRef<boolean>(false);
  const startYCoordinate = React.useRef<number>(0);
  const reservedYCoordinate = React.useRef<number>(50);
  const foo = React.useRef<number>(0);

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

  function handleMouseDown(event: React.MouseEvent | React.TouchEvent) {
    checkMouseDown(event);
    if (event.type === 'mousedown') {
      startYCoordinate.current = (event as React.MouseEvent).clientY;
    } else {
      startYCoordinate.current = (event as React.TouchEvent).touches[0].clientY;
    }
  }

  const checkMouseDown = (event: React.MouseEvent | React.TouchEvent) => {
    if (event.type === 'mousedown' || event.type === 'touchstart') {
      isMouseDown.current = true;
    } else {
      isMouseDown.current = false;
    }
  };

  function handleMouseMove(event: React.MouseEvent | React.TouchEvent) {
    if (isMouseDown.current) {
      updateDistanceThrottled(event);
    }
  }

  const updateDistanceThrottled = throttler(
    (event: React.MouseEvent | React.TouchEvent) =>
      updateMovementDistance(event),
    100,
  );

  const updateMovementDistance = (
    event: React.MouseEvent | React.TouchEvent,
  ) => {
    let targetMovement: number;
    if (event.type === 'mousemove') {
      targetMovement = (event as React.MouseEvent).clientY;
      foo.current = (event as React.MouseEvent).clientY;
    } else {
      targetMovement = (event as React.TouchEvent).touches[0].clientY;
      foo.current = (event as React.TouchEvent).touches[0].clientY;
    }
    const regionList = list as string[];
    const maximumLength = -100 * (regionList.length - 2);
    const movedDistanceWithDirection =
      reservedYCoordinate.current + targetMovement - startYCoordinate.current;
    const flag = startYCoordinate.current - targetMovement;
    const processedCoordinate =
      movedDistanceWithDirection - (movedDistanceWithDirection % 100);
    switch (true) {
      case processedCoordinate > 0:
        setDynamicYCoordinate(0);
        break;
      case processedCoordinate < maximumLength:
        setDynamicYCoordinate(maximumLength);
        break;
      default:
        if (flag < 0) {
          setDynamicYCoordinate(processedCoordinate);
        } else if (processedCoordinate > maximumLength) {
          setDynamicYCoordinate(processedCoordinate - 100);
        }
        break;
    }
  };

  function handleMouseUp(event: React.MouseEvent | React.TouchEvent) {
    checkMouseDown(event);
    selectRegionByMouseMove();
  }

  const selectRegionByMouseMove = () => {
    reservedYCoordinate.current = dynamicYCoordinate;
    const regionList = list as string[];
    const maximumLength = -100 * (regionList.length - 2);
    const rawRegionIndex = Math.abs(Math.ceil(dynamicYCoordinate / 100));
    switch (true) {
      case reservedYCoordinate.current >= 0:
        setRegion(regionList[1]);
        break;
      case reservedYCoordinate.current <= maximumLength:
        setRegion(regionList[regionList.length - 1]);
        break;
      default:
        setRegion(regionList[rawRegionIndex + 1]);
        break;
    }
  };

  return {
    dynamicYCoordinate,
    setDynamicYCoordinate,
    selectRegionByOnWheel,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};

export default useAnimate;
