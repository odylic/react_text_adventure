import React, {useState, useContext} from 'react';
import '../App.scss';
import Text from './Text';
import PlayerStatus from './PlayerState';
import EnemyStatus from './EnemyState';
import Narration from './Narration';
import Queue from './texts/battle/Queue';


function App() {
  return (
    <div className="App">
      <div className="grid">
        <Queue />
        <Narration />
        <Text />
        <PlayerStatus />
        <EnemyStatus />
      </div>
    </div>
  );
}

export default App;
