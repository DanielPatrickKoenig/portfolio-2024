import logo from './logo.svg';
import './App.css';
import SelectorBuilder from './components/SelectorBuilder/SelectorBuilder';
import Template from './components/Template/Template';
import PropertySelector from './components/PropertySelector/PropertySelector';
import { useState } from 'react';

function App() {
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
      <Template />
      <SelectorBuilder ready={ready} baseSelector={'.template-content'} defaultNode={defaultNode} />
      <PropertySelector />
    </div>
  );
}

export default App;
