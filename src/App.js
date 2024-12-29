import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import { useState } from 'react';
import PortfolioItemDetails from './components/PortfolioItemDetails/PortfolioItemDetails';

function App() {
  const [appData, setAppData] = useState({});
  const [currentItem, setCurrentItem] = useState({});

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
  const itemChangeHandler = (item) => {
    setCurrentItem(item);
  } 
  if (!Object.keys(appData).length) {
    loadData();
  }
  return (
    <frameElement>
      <Portfolio data={appData} onItemChange={itemChangeHandler} />
      <PortfolioItemDetails data={currentItem} />
    </frameElement>
  );
}

export default App;
