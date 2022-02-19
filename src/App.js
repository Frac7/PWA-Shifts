import React, { useState } from 'react';

import { Trash, Street } from './components';
import { useNotifications } from './hooks';

const App = () => {
  useNotifications();

  const [date, setDate] = useState('');
  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <article>
      <header>
        <h1>Turni</h1>
      </header>
      Data: <input type="date" value={date} onChange={onChangeDate} />
      <Trash date={date} />
      <Street date={date} />
    </article>
  );
};

export default App;
