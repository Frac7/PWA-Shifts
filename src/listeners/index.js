export const pushNotificationListener = function (event) {
  const payload = event.data && JSON.parse(event.data.text());

  const trashTurns = payload.trash?.length ? payload.trash.join(',') : '-';
  const streetTurns = payload.street || '-';

  const body = `Turni della spazzatura: ${trashTurns}\nTurni della lavastrada: ${streetTurns}`;

  event.waitUntil(
    this.registration.showNotification('Turni', {
      body,
    }),
  );
};

export const notificationClickListener = function (event) {
  const clickedNotification = event.notification;
  clickedNotification.close();

  event.waitUntil(this.clients.openWindow(process.env.PUBLIC_URL));
};

export const pushSubscriptionChangeListener = function (event) {
  if (Notification.permission === 'granted') {
    this.clients
      .matchAll({ includeUncontrolled: true, type: 'window' })
      .then((clients) =>
        clients.forEach((client) =>
          client.postMessage({ type: 'pushsubscriptionchange' }),
        ),
      );
  }
};
