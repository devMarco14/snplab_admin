import React from 'react';

// const useAnimate = () => {
//   const [dynamicYCoordinate, setDynamicYCoordinate] = React.useState<number>(0);

//   function selectRegionByOnWheel(event: React.WheelEvent) {
//     const regionList = list as string[];
//     const sortedRegionList = regionList.sort();
//     const processedDelta = event.deltaY < 0 ? -100 : 100;
//     const absoluteIndex =
//       (Math.abs(dynamicYCoordinate) + Math.abs(processedDelta)) / 100;
//     const maximumLength = -100 * (regionList.length - 2);
//     switch (true) {
//       case processedDelta > 0 && dynamicYCoordinate > maximumLength:
//         setDynamicYCoordinate(
//           (previousYCoordinate) => previousYCoordinate - processedDelta,
//         );
//         setRegion(sortedRegionList[absoluteIndex + 1]);
//         break;
//       case processedDelta < 0 && dynamicYCoordinate < 0:
//         setDynamicYCoordinate(
//           (previousYCoordinate) => previousYCoordinate - processedDelta,
//         );
//         setRegion(sortedRegionList[absoluteIndex - 1]);
//         break;
//       default:
//         setDynamicYCoordinate((previousYCoordinate) => previousYCoordinate);
//         break;
//     }
//   }
// };
