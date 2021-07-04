import React, {useEffect, useContext, useReducer} from 'react';
import {TextContext} from '../contexts/TextContext';
import EnterBattle from './texts/EnterBattle';
import Player0 from './texts/battle/Player0';
import {PlayerContext} from '../contexts/PlayerContext';
import Attack from './texts/battle/Attack';
import Target from './texts/battle/Target';
import Player1 from './texts/battle/Player1';
import Techniques from './texts/battle/Techniques';
import Magic from './texts/battle/Magic';
import Item from './texts/battle/Item';
import TargetTech from './texts/battle/TargetTech';

export default function Text() {
  const [text, setText] = useContext(TextContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  useEffect(() => {
    console.log('textState: ', text);
  });
  return (
    <div className="Text">
      {/* button to setText  */}
      {/* {text === 'Start' ? (
        <button
          onClick={async (e) => {
            e.preventDefault();
            setText('EnterBattle');
          }}
        >
          EnterBattle
        </button>
      ) : (
        ''
      )} */}
      {/* player0's turn */}
      <br></br>
      {text === 'Start' ? (
        <button
          onClick={async (e) => {
            e.preventDefault();
            setText('Player0');
          }}
        >
          {player[0].name}'s turn
        </button>
      ) : (
        ''
      )}

      {text === 'EnterBattle' ? <EnterBattle /> : ''}
      {text === 'Player0' ? <Player0 /> : ''}
      {text === 'Attack' ? <Attack /> : ''}
      {text === 'Target' ? <Target /> : ''}
      {text === 'Player1' ? <Player1 /> : ''}
      {text === 'Techniques' ? <Techniques /> : ''}
      {text === 'Magic' ? <Magic /> : ''}
      {text === 'Item' ? <Item /> : ''}
      {text === 'TargetTech' ? <TargetTech /> : ''}
    </div>
  );
}
