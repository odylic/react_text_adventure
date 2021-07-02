import React, {useState, useContext} from 'react';
import '../App.scss';
import Text from './Text';
import PlayerStatus from './PlayerState';
import EnemyStatus from './EnemyState';


function App() {
  return (
    <div className="App">
      <div className="grid">
        <Text />
        <PlayerStatus />
        <EnemyStatus />
      </div>
    </div>
  );
}

export default App;
