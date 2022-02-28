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
