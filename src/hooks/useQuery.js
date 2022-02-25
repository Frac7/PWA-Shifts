import { useEffect, useState } from 'react';

import { getShifts } from '../api';

const useQuery = (date) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (date) {
      setIsLoading(true);
      getShifts(date).then((res) => {
        setData(res);
        setIsLoading(false);
      });
    }
  }, [date]);

  return { data, isLoading };
};

export default useQuery;
