import React from 'react';
import './App.css';
import LandingPage from './LoginModule/LoginPage';
// import { CounterController } from './counterModule/counterController';

function App() {
  // const counterController = CounterController();
  // const {counterValue, increaseCounter} = counterController
  // console.log(counterValue)
  return (
    <div className="App">
      <LandingPage />
      {/* running {counterValue}
      <button type='button' onClick={()=>increaseCounter(1)}>Addition</button> */}
    </div>
  );
}

export default App;
