import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {PlayerContext} from '../../../contexts/PlayerContext';

export default function Magic() {
  const [text, setText] = useContext(TextContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  useEffect(() => {});
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Player0');
        }}
      >
        Back
      </button>
      <br></br>
      <br></br>
      {Object.values(player[0].magic).map((spell, index) => (
        <div key={index}>
          <button>
            {spell.name} <br></br>
            mana cost: {spell.cost}
          </button>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}
