import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {EnemyContext} from '../../../contexts/EnemyContext';
import {AttackContext} from '../../../contexts/AttackContext';
import {PlayerTurnContext} from '../../../contexts/PlayerTurnContext';
import {NarrationContext} from '../../../contexts/NarrationContext';
import {TargetContext} from '../../../contexts/TargetContext';
import {InventoryContext} from '../../../contexts/InventoryContext';
import {QueueContext} from '../../../contexts/QueueContext';

export default function TargetItem() {
  const {queueArr, currentArr} = useContext(QueueContext);
  const [queue, setQueue] = queueArr;
  const [currentTurn, setCurrentTurn] = currentArr;
  const [text, setText] = useContext(TextContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [enemy, setEnemyState] = useContext(EnemyContext);
  const [attack, setAttack] = useContext(AttackContext);
  const [playerTurn, setPlayerTurn] = useContext(PlayerTurnContext);
  const [narration, setNarration] = useContext(NarrationContext);
  const [target, setTarget] = useContext(TargetContext);
  const {inventoryArr, chosenArr, targetOfItemArr} =
    useContext(InventoryContext);
  const [inventory, setInventory] = inventoryArr;
  const [chosen, setChosen] = chosenArr;
  const [targetOfItem, setTargetOfItem] = targetOfItemArr;

  useEffect(() => {
    console.log('chosen: ', chosen);
    // console.log('inventory: ', inventory);
    console.log('targetOfItem:', targetOfItem);
  });
  return (
    <div>
      {/* back button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Item');
          setNarration('Choose');
        }}
      >
        Back
      </button>
      <br></br>
      <br></br>
      {Object.entries(player).map((character, index) => (
        <div key={index}>
          <button
            onClick={(e) => {
              e.preventDefault();
              // decrements the count
              setInventory((state) => ({
                ...state,
                [chosen[0]]: {
                  ...state[chosen[0]],
                  count: chosen[1].count - 1,
                },
              }));

              // have effect on player character
              setPlayerState((state) => ({
                ...state,
                // the player's number
                [character[0]]: {
                  // spreads out previous state inside object
                  ...state[character[0]],
                  // the thing to update
                  hp: state[character[0]].hp + chosen[1].effect,
                },
              }));
              // set targetOfItem
              setTargetOfItem([character[0], character[1]]);
              // set text
              setText('End');
              // set narration
              setNarration('UseItem');
            }}
          >
            {character[1].name}
          </button>
        </div>
      ))}
    </div>
  );
}
