import React from 'react';

interface RegionListProps {
  category: string;
  list?: string[];
  current?: string;
}

export default function RegionList({
  category,
  list,
  current,
}: RegionListProps) {
  const ulElement = React.useRef<HTMLUListElement | null>(null);
  const headerCategory = category === 'main' ? '시/도' : '시/군/구';

  React.useEffect(() => {
    if (ulElement.current) {
      const lis = Array.from(ulElement.current.children);
      const processedCurrent =
        category === 'main' ? processRegionName(current as string) : current;
      lis.forEach((li: Element) => {
        const htmlLi = li as HTMLElement;
        if (htmlLi.innerText === processedCurrent) {
          htmlLi.classList.remove('deSelectedItem');
          htmlLi.classList.add('selectedItem');
        } else {
          htmlLi.classList.remove('seletedItem');
          htmlLi.classList.add('deSelectedItem');
        }
      });
    }
  }, [current, category]);

  const returnNormalList = (regionList: string[]) =>
    regionList.map((region: string, index: number) => {
      return (
        <li
          key={`${region[0]}_${index}`}
          className="flex-center h-1/4 text-lg small:text-2xl font-bold"
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

  const processRegionName = (regionName: string) => {
    let newName: string;
    if (regionName[2] === '남' || regionName[2] === '북') {
      newName = regionName[0] + regionName[2];
    } else {
      newName = regionName.slice(0, 2);
    }
    return newName;
  };

  return (
    <section className="w-full h-full px-5">
      <h2 className="flex-center h-1/5 w-full text-base small:text-2xl font-bold">
        {headerCategory}
      </h2>
      <ul ref={ulElement} className="h-full w-full pt-[25px]">
        {category === 'main'
          ? returnProcessedList(list as string[])
          : returnNormalList(list as string[])}
      </ul>
    </section>
  );
}
