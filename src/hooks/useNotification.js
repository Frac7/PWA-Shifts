import { useEffect } from 'react';

import { sendSubscription, getPublicKey } from '../api';
import { urlBase64ToUint8Array } from '../utils';

const handleSubscription = (registration) => {
  return (
    registration.pushManager
      .getSubscription()
      .then((subscription) => {
        if (!subscription) {
          // 2b. Register a subscription to the server using a valid public key provided from the server
          return getPublicKey().then((res) => {
            const publicKey = urlBase64ToUint8Array(res.publicKey);
            return registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: publicKey,
            });
          });
        }
      })
      // 3 - Send subscription
      .then((subscription) => {
        if (subscription) {
          sendSubscription(subscription);
        }
      })
  );
};

const useNotifications = () => {
  useEffect(() => {
    if (Notification.permission === 'default') {
      // 1. Request permission for notification for the first time
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // 2a. When the service worker is ready and notifications are allowed, handle subscription
          navigator.serviceWorker.ready.then(handleSubscription);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (Notification.permission === 'granted') {
      // 2a. When the service worker is ready and notifications are allowed, handle subscription
      navigator.serviceWorker.ready.then(handleSubscription);
    }
  }, []);
};

export default useNotifications;
