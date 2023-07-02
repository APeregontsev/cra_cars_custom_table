import { useMemo } from "react";

export const useSearch = (data, searchQuery) => {
  function searchCallback(car) {
    for (const key in car) {
      if (car[key].toString().toLowerCase().includes(searchQuery.toLowerCase())) return true;
    }
  }

  const filteredData = useMemo(() => {
    if (searchQuery) {
      return data.filter(searchCallback);
    } else {
      return data;
    }
  }, [data, searchQuery]);

  return filteredData;
};
