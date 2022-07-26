import React from 'react';
import { throttler } from '../utils';

const useAnimate = (list: string[], setRegion: (value: string) => void) => {
  const [dynamicYCoordinate, setDynamicYCoordinate] = React.useState<number>(0);
  const isMouseDown = React.useRef<boolean>(false);
  const startYCoordinate = React.useRef<number>(0);
  const reservedYCoordinate = React.useRef<number>(0);

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
    } else {
      targetMovement = (event as React.TouchEvent).touches[0].clientY;
    }
    const regionList = list as string[];
    const maximumLength = -100 * (regionList.length - 2);
    const movedDistanceWithDirection =
      reservedYCoordinate.current + targetMovement - startYCoordinate.current;
    if (dynamicYCoordinate === 0) {
      if (movedDistanceWithDirection < 0) {
        setDynamicYCoordinate(movedDistanceWithDirection);
      }
    } else if (dynamicYCoordinate === maximumLength) {
      if (movedDistanceWithDirection > maximumLength) {
        setDynamicYCoordinate(movedDistanceWithDirection);
      }
    } else {
      setDynamicYCoordinate(movedDistanceWithDirection);
    }
  };

  function handleMouseUp(event: React.MouseEvent | React.TouchEvent) {
    checkMouseDown(event);
    selectRegionByMouseMove(event);
  }

  const selectRegionByMouseMove = (
    event: React.MouseEvent | React.TouchEvent,
  ) => {
    reservedYCoordinate.current = dynamicYCoordinate;
    const regionList = list as string[];
    const maximumLength = -100 * (regionList.length - 2);
    const rawYCoordinate = dynamicYCoordinate;
    const processedCoordinate = rawYCoordinate - (rawYCoordinate % 100);
    const rawRegionIndex = Math.abs(Math.floor(rawYCoordinate / 100));
    let regionIndex =
      // eslint-disable-next-line no-nested-ternary
      rawRegionIndex === 0
        ? rawRegionIndex + 1
        : rawRegionIndex === regionList.length - 1
        ? regionList.length - 1
        : rawRegionIndex;
    switch (true) {
      case reservedYCoordinate.current > 0:
        setDynamicYCoordinate(0);
        setRegion(regionList[1]);
        break;
      case reservedYCoordinate.current < maximumLength - 100:
        setDynamicYCoordinate(maximumLength);
        setRegion(regionList[regionList.length - 1]);
        break;
      case reservedYCoordinate.current === 0:
        setRegion(regionList[1]);
        break;
      case reservedYCoordinate.current === maximumLength:
        setRegion(regionList[regionList.length - 1]);
        break;
      default:
        if (event.type === 'mouseleave') {
          regionIndex += 1;
        }
        setDynamicYCoordinate(processedCoordinate);
        setRegion(regionList[regionIndex]);
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
