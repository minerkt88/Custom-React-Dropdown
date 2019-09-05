import React from 'react';
import Dropdown from './components/Dropdown'
import Items from './components/DropdownItems'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Dropdown items={['Tim and Eric Awesome Show: Great Job!','Tom Goes To The Mayor','Decker']}/> */}
      <Dropdown items={Items.KCshows}/>
    </div>
  );
}

export default App;
