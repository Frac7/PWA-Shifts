import React from 'react';

import { trash } from '../data';

const Trash = ({ date }) => {
  const dayOfTheWeek = new Date(date).getDay();
  const trashItems = trash[dayOfTheWeek];

  return (
    <details>
      <summary>Turni della spazzatura:</summary>
      {trashItems ? trashItems.map((trashItem) => <kdb>{trashItem}</kdb>) : '-'}
    </details>
  );
};

export default Trash;
