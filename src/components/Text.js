import React, {useEffect, useContext, useReducer} from 'react';
import {TextContext} from '../contexts/TextContext';
import EnterBattle from './texts/EnterBattle';

export default function Text() {
  const [text, setText] = useContext(TextContext);
  useEffect(() => {
    console.log();
  });
  return (
    <div className="Text">
      {/* button to setText  */}
      {text !== 'EnterBattle' ? (
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
      )}

      {text === 'EnterBattle' ? <EnterBattle /> : ''}
    </div>
  );
}
