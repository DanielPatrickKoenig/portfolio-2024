import logo from './logo.svg';
import './App.css';
import SelectorBuilder from './components/SelectorBuilder/SelectorBuilder';
import Template from './components/Template/Template';
import PropertyManager from './components/PropertyManager/PropertyManager';
import { useState } from 'react';

function App() {
  const topSelectorClass = 'template-content';
  const [ready, setReady] = useState(false);

  if (!ready) setTimeout(() => setReady(true), 1000);
  const defaultNode = {
    followables: ['elements', 'classes', 'ids', 'attributes', 'psuedos'],
    selector: '',
    type: 'element'
  };
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
        
      </header>
      <Template templateClass={topSelectorClass} />
      <SelectorBuilder ready={ready} baseSelector={`.${topSelectorClass}`} defaultNode={defaultNode} />
      <PropertyManager templateClass={topSelectorClass} currentSelector={' '} />
    </div>
  );
}

export default App;
