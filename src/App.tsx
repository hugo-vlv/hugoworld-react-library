import { useState } from 'react';

import { Button } from '..';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + CSS Modules</h1>
      <div className="card">
        <Button type="button" onClick={() => setCount((c) => c + 1)}>
          count is
          {' '}
          {count}
        </Button>
      </div>
    </>
  );
}

export default App;
