import React from 'react';

const Street = ({ data }) => (
  <details open={!!data}>
    <summary>Turni della lavastrada:</summary>
    {data ? <kbd>{data}</kbd> : '-'}
  </details>
);

export default Street;
