export const processRegionName = (regionName: string) => {
  let newName: string;
  if (regionName[2] === '남' || regionName[2] === '북') {
    newName = regionName[0] + regionName[2];
  } else {
    newName = regionName.slice(0, 2);
  }
  return newName;
};

export const debouncer = (callback: (value?: any) => any, timeout = 100) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, timeout);
  };
};
