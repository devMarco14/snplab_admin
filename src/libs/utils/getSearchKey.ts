export const getSearchKey = (
  event: React.ChangeEvent<HTMLSelectElement>,
  setSearchKey: any,
) => {
  setSearchKey(event.target.value);
};
