import { useEffect, useState } from 'react';

import { getShifts } from '../api';

const useNotifications = () => {
  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);
};

const useQuery = (date) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (date) {
      setIsLoading(true);
      getShifts(date)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setIsLoading(false);
        });
    }
  }, [date]);

  return { data, isLoading };
};

export { useNotifications, useQuery };
