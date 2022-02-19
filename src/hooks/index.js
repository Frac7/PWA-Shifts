import { useEffect, useState } from 'react';

import { getShifts } from '../api';
import { urlBase64ToUint8Array } from '../utils';

const useNotifications = () => {
  useEffect(() => {
    if (Notification.permission === 'default') {
      // 1. Request permission for notification for the first time
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // 2. When the service worker is ready and notifications are allowed, handle subscription
          navigator.serviceWorker.ready.then((registration) => {
            return (
              registration.pushManager
                .getSubscription()
                .then((subscription) => {
                  // 2a - Return the subscription, if it exists
                  if (subscription) {
                    return subscription;
                  }
                  // 2b - Otherwise register a subscription to the server using a valid public key provided from the server
                  fetch(`${process.env.REACT_APP_BE_URL}/public-key`)
                    .then((res) => res.json())
                    .then((res) => {
                      const publicKey = urlBase64ToUint8Array(res.publicKey);
                      return registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: publicKey,
                      });
                    });
                })
                // 3 - Send subscription
                .then((subscription) => {
                  fetch(`${process.env.REACT_APP_BE_URL}/subscription`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      subscription,
                    }),
                  });
                })
            );
          });
        }
      });
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
