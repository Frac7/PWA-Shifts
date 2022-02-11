import React from 'react';

import { street } from '../data';

const Street = ({ date }) => {
  const dayOfTheWeek = new Date(date).getDay();
  const streetItem = street[dayOfTheWeek];

  return (
    <details>
      <summary>Turni della lavastrada:</summary>
      {streetItem ? <kbd>{streetItem}</kbd> : '-'}
    </details>
  );
};

export default Street;
