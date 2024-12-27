import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import { useState } from 'react';

function App() {
  const [appData, setAppData] = useState({});

  const loadData = async () => {
    const response = await fetch('https://danielpatrickkoenig.github.io/shared-app-resources/pData.json');
    const json = await response.json();
    setAppData(json);
  };

  loadData();
  return (
    <Portfolio data={appData} />
  );
}

export default App;
