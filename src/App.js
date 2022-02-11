import React, { useState } from 'react';

const App = () => {
  const [date, onChangeDate] = useState('');
  return (
    <article>
      <header>
        <h1>Turni</h1>
      </header>
      Data: <input type="date" value={date} onChange={onChangeDate} />
    </article>
  );
};

export default App;
