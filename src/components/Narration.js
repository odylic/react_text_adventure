import React, {useContext, useEffect} from 'react';
import {NarrationContext} from '../contexts/NarrationContext';
import {PlayerContext} from '../contexts/PlayerContext';
import {PlayerTurnContext} from '../contexts/PlayerTurnContext';
import {AttackContext} from '../contexts/AttackContext';
import {TargetContext} from '../contexts/TargetContext';
import {InventoryContext} from '../contexts/InventoryContext';

export default function Narration() {
  const [narration, setNarration] = useContext(NarrationContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [playerTurn, setPlayerTurn] = useContext(PlayerTurnContext);
  const [attack, setAttack] = useContext(AttackContext);
  const [target, setTarget] = useContext(TargetContext);
  const {chosenArr, targetOfItemArr} = useContext(InventoryContext);
  const [chosen, setChosen] = chosenArr;
  const [targetOfItem, setTargetOfItem] = targetOfItemArr;

  useEffect(() => {
    // console.log('narration: ', narration);
    // console.log(player[0]);
  });
  return (
    <div className="Narration">
      {narration === 'Start' ? 'You see enemies about to attack' : ''}
      {narration === 'Target' ? 'Which do you want to target?' : ''}
      {narration === 'Choose' ? 'What do you want to do?' : ''}
      {narration === 'Attacking'
        ? `${player[0].name} is attacking ${target.type} for ${attack.damage} damage`
        : ''}
      {narration === 'UseItem'
        ? `${chosen[0]} used to heal ${targetOfItem[1].name} for ${chosen[1].effect} hp`
        : ''}
    </div>
  );
}
