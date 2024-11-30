import logo from './logo.svg';
import './App.css';
import SelectorBuilder from './components/SelectorBuilder/SelectorBuilder';
import Template from './components/Template/Template';
import PropertyManager from './components/PropertyManager/PropertyManager';
import templates from './assets/editableTemplates.json'
import { useState } from 'react';
import { getParameterByName } from './utils/General';

import { PropertyItemizer } from './components/PropertySelector/PropertyItemizer';

const presets = getParameterByName('presets');

function App() {
  const [templateIndex, selectorIndex] = presets ? presets.split(',') : [-1, -1];
  const topSelectorClass = 'template-content';
  const [ready, setReady] = useState(false);
  const [currentSelector, setCurrentSelector] = useState(templateIndex >= 0 ? templates[templateIndex].selectors[selectorIndex] : ' ');
  const [currentTemplate, setCurrentTemplate] = useState(templates[0]);
  
  if (!ready) setTimeout(() => setReady(true), 1000);
  const defaultNode = {
    followables: ['elements', 'classes', 'ids', 'attributes', 'psuedos'],
    selector: '',
    type: 'element'
  };
  const selectorUpdatedHandler = (value) => {
    setCurrentSelector(value);
  }
  const templateUpdateHandler = (template) => {
    setCurrentTemplate(template);
  }
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
      <Template
        templateClass={topSelectorClass}
        templates={templates}
        templateIndex={templateIndex}
        onTemplateSelected={templateUpdateHandler}
      />
      {templateIndex === -1 && <SelectorBuilder
        ready={ready}
        baseSelector={`.${topSelectorClass}`}
        defaultNode={defaultNode}
        currentTemplate={currentTemplate}
        onSelectorUpdated={selectorUpdatedHandler}
      />}
      <PropertyManager
        templateClass={topSelectorClass}
        currentSelector={currentSelector}
        currentTemplate={currentTemplate}
      />
      <PropertyItemizer />
    </div>
  );
}

export default App;
