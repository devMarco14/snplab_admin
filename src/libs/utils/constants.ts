export const BASE_URL = 'http://localhost:8080';
export const CSV_HEADER = [
  { label: 'Num.', key: 'id' },
  { label: '지원 날짜', key: '?' },
  { label: '지원자명', key: 'name' },
  { label: '성별', key: 'gender' },
  { label: '생년월일', key: 'birthday' },
  { label: '연락처', key: 'cellular' },
  { label: '이메일', key: 'email' },
  { label: '이용수단', key: 'transportation' },
  { label: '거주지', key: 'address' },
  { label: '당첨여부', key: 'win' },
];
export const TRANSPORTATION = [
  { id: 1, item: '버스' },
  { id: 2, item: '지하철' },
  { id: 3, item: '택시' },
  { id: 4, item: 'KTX/기차' },
  { id: 5, item: '도보' },
  { id: 6, item: '자전거' },
  { id: 7, item: '전동킥보드' },
  { id: 8, item: '자가용' },
];
