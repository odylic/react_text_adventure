import React, {useEffect, useContext} from 'react';
import {TextContext} from '../contexts/TextContext';
import {NarrationContext} from '../contexts/NarrationContext';
import {PlayerContext} from '../contexts/PlayerContext';
import {EnemyContext} from '../contexts/EnemyContext';
import {InventoryContext} from '../contexts/InventoryContext';
import {ViewContext} from '../contexts/ViewContext';

export default function Save() {
  const [text, setText] = useContext(TextContext);
  const [narration, setNarration] = useContext(NarrationContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const {inventoryArr} = useContext(InventoryContext);
  const [inventory, setInventory] = inventoryArr;
  const [view, setView] = useContext(ViewContext);
  const [enemy, setEnemy] = useContext(EnemyContext);

  useEffect(async () => {
    // const response = await fetch('/sql/text');
    // const data = await response.json();
    // console.log(data[0].player_state);
  }, []);
  return (
    <div className="Save">
      <button
        onClick={async (e) => {
          e.preventDefault();
          const response = await fetch('/sql/text');
          const data = await response.json();
          setText(data[0].text_state);
          setNarration(data[0].narration_state);
          setPlayerState(data[0].player_state);
          setInventory(data[0].inventory_state);
          setView(data[0].view_state);
        }}
      >
        Load
      </button>{' '}
      <br></br>
      <button
        onClick={(e) => {
          e.preventDefault();
          fetch('/sql/text', {
            method: 'PUT',
            body: JSON.stringify({
              text_state: text,
              narration_state: narration,
              player_state: player,
              inventory_state: inventory,
              view_state: view,
            }),
            headers: {'Content-Type': 'application/json'},
          });
        }}
      >
        Save
      </button>{' '}
      <br></br>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (view === 'Battle') setView('Story');
          if (view === 'Story') setView('Battle');
          if (text === 'Start') setText('Story');
          if (text === 'Story') setText('Start');
          // setText('Start');
        }}
      >
        Change View
      </button>
    </div>
  );
}
