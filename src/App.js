import React from 'react';
import Dropdown from './components/Dropdown'
import Items from './components/DropdownItems'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Dropdown options={Items.KCshows} />
    </div>
  );
}

export default App;
