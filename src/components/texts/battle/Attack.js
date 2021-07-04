import React, {useContext} from 'react';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {TextContext} from '../../../contexts/TextContext';

export default function Attack() {
  const [player, setPlayerState] = useContext(PlayerContext);
  const [text, setText] = useContext(TextContext);
  return (
    <div>
      {player[0].equipment.leftHand ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setText('Target');
          }}
        >
          Use {player[0].equipment.leftHand}
        </button>
      ) : (
        ''
      )}
      {player[0].equipment.rightHand ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setText('Target');
          }}
        >
          Use {player[0].equipment.rightHand}
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
