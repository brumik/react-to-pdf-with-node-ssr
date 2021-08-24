import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@patternfly/react-core/dist/styles/base.css';
import { Button } from '@patternfly/react-core';

import ChartRenderer, { functions } from 'react-json-chart-builder';
import { schema, apiData } from './chartData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>This is a PF button</Button>
      </header>
      <div>
        <ChartRenderer
          schema={schema}
          functions={{
            ...functions,
            fetchFnc: () => Promise.resolve(apiData),
          }}
        />
      </div>
    </div>
  );
}

export default App;
