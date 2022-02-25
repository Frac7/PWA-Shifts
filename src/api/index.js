const getShifts = (date) =>
  fetch(`${process.env.REACT_APP_BE_URL}?date=${date}`).then((res) =>
    res.json(),
  );

const getPublicKey = () =>
  fetch(`${process.env.REACT_APP_BE_URL}public-key`).then((res) => res.json());

const sendSubscription = (subscription) =>
  fetch(`${process.env.REACT_APP_BE_URL}subscription`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      subscription,
    }),
  });

export { getShifts, getPublicKey, sendSubscription };
