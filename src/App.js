import React, { useState } from 'react';

import { Trash, Clean, Street } from './components';

const App = () => {
  const [date, setDate] = useState('');

  return (
    <article>
      <header>
        <h1>Turni</h1>
      </header>
      Data: <input type="date" value={date} onChange={setDate} />
      <Trash date={date} />
      <Clean date={date} />
      <Street date={date} />
    </article>
  );
};

export default App;
