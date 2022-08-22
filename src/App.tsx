import React from 'react';

import { GlobalStyles } from './styles';
import Button from './components/Button';

function App() {
  return (
    <>
      <GlobalStyles />

      <main css="display: flex; flex-direction: column; align-items: center; flex-wrap: wrap; position: relative;">
        <header>
          <h1>No elo</h1>
        </header>

        <div css="display: flex; flex-direction: row; align-items: stretch; justify-content: space-between; flex-wrap: wrap;">
          <Button onClick={() => {}}>button</Button>
        </div>
      </main>
    </>
  );
}

export default App
