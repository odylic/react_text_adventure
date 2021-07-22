import React, {useState, useContext} from 'react';
import '../App.scss';
import Text from './Text';
import PlayerStatus from './PlayerState';
import EnemyStatus from './EnemyState';
import Narration from './Narration';
import Queue from './texts/battle/Queue';
import {ViewContext} from '../contexts/ViewContext';
import Save from './Save';
import Menu from './menu/Menu';

function App() {
  const [view, setView] = useContext(ViewContext);
  return (
    <div className="App">
      {view === 'Menu' ? (
        <div className="grid">
          <Save />
          <Menu />
        </div>
      ) : (
        ''
      )}
      {view === 'Story' ? (
        <div className="grid">
          <PlayerStatus />
          <Text />
          <Narration />
          <Save />
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
          <Save />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
