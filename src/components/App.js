import React, {useState, useContext} from 'react';
import '../App.scss';
import Text from './Text';
import PlayerStatus from './PlayerState';
import EnemyStatus from './EnemyState';
import Narration from './Narration';


function App() {
  return (
    <div className="App">
      <div className="grid">
        <Narration />
        <Text />
        <PlayerStatus />
        <EnemyStatus />
      </div>
    </div>
  );
}

export default App;
