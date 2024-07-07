import React from 'react';
import TitleHeader from './components/TitleHeader';
import TitleSpan from './components/UI/TitleSpan/TitleSpan';
import CasesBlock from './components/CasesBlock';
import Button from './components/UI/Button/Button';
import OperatingSystem from './components/OperatingSystem';
import Feedback from './components/Feedback';
import android from './images/icon/iconAndroid.png';
import ios from './images/icon/ios.png';
import Lorenzo from './images/users/Lorenzo.png'

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className='header_block'>
        <TitleHeader />
        <div className='header_block__feedback'>
          <Feedback 
            userImage={Lorenzo} 
            firstName="Lorenzo" 
            nickname="@lorenzoo" 
            feedbackText="Amazing Telegram bot! Provides real-time crypto prices and news" />
        </div>
      </div>
      <div className='title-span_block'>
        <TitleSpan>Subscribe to our channel to learn more</TitleSpan>
      </div>
      <CasesBlock/>
      <div className='button_block'>
        <Button>Join Whatsapp</Button>
      </div>
      <div className='operating_block'>
        <OperatingSystem operatingImage={android} operatingText='get it on' operatingName='Google play'/>
        <OperatingSystem operatingImage={ios} operatingText='Available on the' operatingName='App Store'/>
      </div>
    </div>
  );
}

export default App;
