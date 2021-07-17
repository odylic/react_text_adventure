import React, {useState, useContext} from 'react';
import '../App.scss';
import Text from './Text';
import PlayerStatus from './PlayerState';
import EnemyStatus from './EnemyState';
import Narration from './Narration';
import Queue from './texts/battle/Queue';
import {ViewContext} from '../contexts/ViewContext';

function App() {
  const [view, setView] = useContext(ViewContext);
  return (
    <div className="App">
      {view === 'Story' ? (
        <div className="grid">
          <PlayerStatus />
          <Text />
          <Narration />
        </div>
      ) : (
        ''
      )}
      {view === 'Battle' ? (
        <div className="grid">
          <Queue />
          <Narration />
          <Text />
          <PlayerStatus />
          <EnemyStatus />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
