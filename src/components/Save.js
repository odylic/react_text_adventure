import React, {useEffect, useContext} from 'react';
import {TextContext} from '../contexts/TextContext';
import {NarrationContext} from '../contexts/NarrationContext';
import {PlayerContext} from '../contexts/PlayerContext';

export default function Save() {
  const [text, setText] = useContext(TextContext);
  const [narration, setNarration] = useContext(NarrationContext);
  const [player, setPlayerState] = useContext(PlayerContext);

  useEffect(async () => {
    const response = await fetch('/sql/text');
    const data = await response.json();
    // console.log(data[0].player_state);

    setText(data[0].text_state);
    setNarration(data[0].narration_state);
    setPlayerState(data[0].player_state);
  }, []);
  return (
    <div className="Save">
      <button
        onClick={(e) => {
          e.preventDefault();
          fetch('/sql/text', {
            method: 'PUT',
            body: JSON.stringify({
              text_state: text,
              narration_state: narration,
              player_state: player,
            }),
            headers: {'Content-Type': 'application/json'},
          });
        }}
      >
        Save
      </button>
    </div>
  );
}
