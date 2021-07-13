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

  useEffect(() => {});
  return (
    <div>
      {/* back button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Magic');
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
              // setText
              setText('End');
              // setTarget
              setTarget(character);
              // setNarration
              setNarration('Healing');
              // decrement mana
              setPlayerState((prevState) => ({
                ...prevState,
                1: {
                  ...prevState[1],
                  mana: prevState[1].mana - attack.cost,
                },
              }));
              console.log(character);

              // Heal the target
              setPlayerState((prevState) => ({
                ...prevState,
                [index]: {
                  ...prevState[index],
                  hp: prevState[index].hp + attack.damage,
                },
              }));
            }}
          >
            {character[1].name}
          </button>
        </div>
      ))}
    </div>
  );
}
