import React, {useContext} from 'react';
import {NarrationContext} from '../../../contexts/NarrationContext';
import {TextContext} from '../../../contexts/TextContext';
import {ViewContext} from '../../../contexts/ViewContext';
import {EnemyContext} from '../../../contexts/EnemyContext';

export default function Story() {
  const [narration, setNarration] = useContext(NarrationContext);
  const [text, setText] = useContext(TextContext);
  const [view, setView] = useContext(ViewContext);
  const [enemy, setEnemyState] = useContext(EnemyContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setNarration('BattleStart');
          setView('Battle');
          setText('Start');
          setEnemyState({
            0: {
              type: 'goo',
              hp: 2,
              dead: false,
            },
            // 1: {
            //   type: 'goblin',
            //   hp: 8,
            //   dead: false,
            // },
            // 2: {
            //   type: 'faerie',
            //   hp: 2,
            //   dead: false,
            // },
            // 3: {
            //   type: 'goo',
            //   hp: 5,
            //   dead: false,
            // },
          });
        }}
      >
        Go Fight
      </button>{' '}
      <br></br>
      <button
        onClick={(e) => {
          e.preventDefault();
          setNarration('Town');
          setText('Town');
        }}
      >
        Go to Town
      </button>
    </div>
  );
}
