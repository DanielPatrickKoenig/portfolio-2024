import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import { useState } from 'react';

function App() {
  const [appData, setAppData] = useState({});

  const loadData = async () => {
    try{
      const response = await fetch('https://danielpatrickkoenig.github.io/shared-app-resources/pData.json');
      const json = await response.json();
      setAppData(json);
    }
    catch(e){
      console.error(e);
    }
  };

  loadData();
  return (
    <Portfolio data={appData} />
  );
}

export default App;
