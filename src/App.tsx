import React, { CSSProperties } from 'react'
import './App.css';
import Colors from './styles/colors';

import ContentArea from './Content'
import Countdown from './Countdown'

const AppStyles: CSSProperties = {
  textAlign: 'center',
  background: Colors.DarkGrey,
  width: '100%',
  height: '100%',
  minWidth: '100vw',
  minHeight: '100vh',
  overflowX: 'hidden',
  overflowY: 'hidden',
  position: 'relative'
}


const TargetDate = new Date('02/26/20')
function App() {
  return (
    <div style={AppStyles}>
      <ContentArea title="Countdown">
        <Countdown targetDate={TargetDate}/>
      </ContentArea>
    </div>
  )
}

export default App;
