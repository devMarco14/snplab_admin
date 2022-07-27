// eslint-disable-next-line consistent-return
export const dynamicPlaceholder = (selectedValue: string) => {
  let placeholderContent;
  switch (selectedValue) {
    case 'name':
      placeholderContent = '지원자명을 검색하세요';
      return placeholderContent;
    case 'gender':
      placeholderContent = "'여성' 또는 '남성'으로만 검색하세요";
      return placeholderContent;
    case 'birthday':
      placeholderContent = '예시) 2022.01.01';
      return placeholderContent;
    case 'transportation':
      placeholderContent =
        '버스, 지하철, 택시, KTX/기차, 도보, 자전거, 전동킥보드, 자가용';
      return placeholderContent;
    case 'address':
      placeholderContent = '시/도/군/구로 검색하세요';
      return placeholderContent;
  }
};
