const getShifts = (date) =>
  fetch(`${process.env.REACT_APP_BE_URL}/?date=${date}`);

export { getShifts };
