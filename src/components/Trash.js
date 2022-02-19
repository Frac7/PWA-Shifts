import React from 'react';

const Trash = ({ data }) => (
  <details open={!!data}>
    <summary>Turni della spazzatura:</summary>
    {data
      ? data.map((trashItem) => (
          <>
            <kbd>{trashItem}</kbd>&nbsp;
          </>
        ))
      : '-'}
  </details>
);

export default Trash;
