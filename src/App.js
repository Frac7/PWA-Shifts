import React, { useState } from 'react';

import { Trash, Street } from './components';
import { useNotifications, useQuery } from './hooks';

const App = () => {
  useNotifications();

  const [date, setDate] = useState('');
  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const { data, isLoading } = useQuery(date);
  const { trash, street } = data || {};

  return (
    <article>
      <header>
        <h1>Turni</h1>
      </header>
      {isLoading ? (
        <article aria-busy="true"></article>
      ) : (
        <>
          Data: <input type="date" value={date} onChange={onChangeDate} />
          <Trash data={trash} />
          <Street data={street} />
        </>
      )}
    </article>
  );
};

export default App;
