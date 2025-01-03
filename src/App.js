import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import { Fragment, useState } from 'react';
import PortfolioItemDetails from './components/PortfolioItemDetails/PortfolioItemDetails';
import TopNav from './components/TopNav/TopNav';
import ModalContent from './components/ModalContent/ModalContent';
import PortfolioVideo from './components/PortfolioVideo/PortfolioVideo';

function App() {
  const [appData, setAppData] = useState({});
  const [currentItem, setCurrentItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [videoData, setVideoData] = useState('');

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
  const videoHandler = (e) => {
    setShowModal(true);
    setVideoData(e);
  }
  const itemChangeHandler = (item) => {
    setCurrentItem(item);
  } 
  if (!Object.keys(appData).length) {
    loadData();
  }
  return (
    <Fragment>
      <TopNav />
      <Portfolio data={appData} onItemChange={itemChangeHandler} />
      <PortfolioItemDetails
        data={currentItem}
        onVideoClicked={videoHandler}
      />
      {showModal && (<ModalContent
        onClose={() => setShowModal(false)}
      >
        {videoData && <PortfolioVideo vid={videoData} />}
      </ModalContent>)}
    </Fragment>
  );
}

export default App;
