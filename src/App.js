import React from 'react';
import { HeaderNav } from './components/HeaderNav';
import { MainContent } from './components/MainContent';

const detectMobile = () => {
  return (window.innerWidth <= 575 && window.innerHeight <= 600 );
}

function App() {
  return (
      detectMobile()
      ? <div className="mobile_alert">
          <span> please, run this website from desktop</span>
        </div>

      : <div>
          <HeaderNav />
          <MainContent />
        </div>
        )
}

export default App;
