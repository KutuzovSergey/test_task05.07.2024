import React from 'react';
import TitleHeader from './components/TitleHeader';
import TitleSpan from './components/UI/TitleSpan/TitleSpan';
import CasesBlock from './components/CasesBlock';
import Button from './components/UI/Button/Button';
import OperatingSystem from './components/OperatingSystem';
import Feedback from './components/Feedback';
import Background from './components/Background';
import android from './images/icon/iconAndroid.png';
import ios from './images/icon/ios.png';
import Lorenzo from './images/users/Lorenzo.png';
import Adalina from './images/users/Adalina.png';
import Alexander from './images/users/Alexander.png';
import Rushana from './images/users/Rushana.png';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className='App__header_block'>
        <TitleHeader />
        <div className='App__header_block__feedback'>
          <Feedback 
            userImage={Lorenzo} 
            firstName="Lorenzo" 
            nickname="@lorenzoo" 
            feedbackText="Amazing Telegram bot! Provides real-time crypto prices and news" />
        </div>
      </div>
      <div className='App__content'>
        <div className='App__content_block'>
          <div className='App__title-span_wrapper'>
            <TitleSpan>Subscribe to our channel to learn more</TitleSpan>
          </div>
          <CasesBlock/>
          <div className='App__button_wrapper'>
            <Button>Join Whatsapp</Button>
          </div>
          <div className='App__operating_block'>
            <OperatingSystem operatingImage={android} operatingText='get it on' operatingName='Google play'/>
            <OperatingSystem operatingImage={ios} operatingText='Available on the' operatingName='App Store'/>
          </div>
        </div>
        <div className='App__content_feedback'>
          <Feedback 
            userImage={Adalina} 
            firstName="Adalina" 
            nickname="@ada" 
            feedbackText="Must-have bot for crypto traders. Accurate signals and analysis" />
            <div className='App__content_feedback_right'>
              <Feedback 
              userImage={Alexander} 
              firstName="Alexander" 
              nickname="@alex_x" 
              feedbackText="Superb cryptocurrency bot! Quick updates and reliable data" />
            </div>
            <Feedback 
            userImage={Rushana} 
            firstName="Rushana" 
            nickname="@Hana" 
            feedbackText="Efficient and user-friendly bot. Simplifies crypto trading tasks" />
        </div>
      </div>
      <Background/>
    </div>
  );
}

export default App;
