import { useEffect } from 'react';

const useNotifications = () => {
  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);
};

export { useNotifications };
