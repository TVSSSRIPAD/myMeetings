import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import List from './components/List';

import {BrowserRouter, Route , Switch} from 'react-router-dom';
import AddMeeting from './components/AddMeeting';
function App() {
  return (
    <div className="App">
      <GlobalProvider >
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={List} />
          <Route exact path='/addmeeting' component={AddMeeting} />
        </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
