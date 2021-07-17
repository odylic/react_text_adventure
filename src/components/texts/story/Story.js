import React, {useContext} from 'react';
import {NarrationContext} from '../../../contexts/NarrationContext';
import {TextContext} from '../../../contexts/TextContext';
import {ViewContext} from '../../../contexts/ViewContext';

export default function Story() {
  const [narration, setNarration] = useContext(NarrationContext);
  const [text, setText] = useContext(TextContext);
  const [view, setView] = useContext(ViewContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setNarration('BattleStart');
          setView('Battle');
          setText('Start');
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
