import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {InventoryContext} from '../../../contexts/InventoryContext';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {PlayerTurnContext} from '../../../contexts/PlayerTurnContext';
import {NarrationContext} from '../../../contexts/NarrationContext';

export default function Item() {
  const [text, setText] = useContext(TextContext);
  const [inventory, setInventory] = useContext(InventoryContext);
  const [playerTurn, setPlayerTurn] = useContext(PlayerTurnContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [narration, setNarration] = useContext(NarrationContext);
  useEffect(() => {
    console.log();
  });
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (playerTurn === 'Player0') setText('Player0');
          if (playerTurn === 'Player1') setText('Player1');
          if (playerTurn === 'Player2') setText('Player2');
          setNarration('Choose');
        }}
      >
        Back
      </button>

      <br></br>
      <br></br>
      {Object.entries(inventory).map((item, index) => (
        <div key={index}>
          <button>
            {item[0]} : {item[1]}
          </button>
        </div>
      ))}
    </div>
  );
}
