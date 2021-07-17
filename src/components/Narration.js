import React, {useContext, useEffect} from 'react';
import {NarrationContext} from '../contexts/NarrationContext';
import {PlayerContext} from '../contexts/PlayerContext';
import {PlayerTurnContext} from '../contexts/PlayerTurnContext';
import {AttackContext} from '../contexts/AttackContext';
import {TargetContext} from '../contexts/TargetContext';
import {InventoryContext} from '../contexts/InventoryContext';
import {QueueContext} from '../contexts/QueueContext';

export default function Narration() {
  const {queueArr, currentArr} = useContext(QueueContext);
  const [queue, setQueue] = queueArr;
  const [currentTurn, setCurrentTurn] = currentArr;
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
      {narration === 'BattleStart' ? 'You see enemies about to attack' : ''}
      {narration === 'Target' ? 'Which do you want to target?' : ''}
      {narration === 'Choose' ? 'What do you want to do?' : ''}
      {narration === 'Attacking' && currentTurn === 'Ryu'
        ? `${player[0].name} is attacking ${target.type} for ${attack.damage} damage`
        : ''}
      {narration === 'Attacking' && currentTurn === 'Marle'
        ? `${player[1].name} is attacking ${target.type} for ${attack.damage} damage`
        : ''}
      {narration === 'UseItem'
        ? `${chosen[0]} used to heal ${targetOfItem[1].name} for ${chosen[1].effect} hp`
        : ''}
      {narration === 'End' ? `Who's next?` : ''}
      {narration === 'EnemyAttacking' ? `${currentTurn} is attacking` : ''}
      {narration === 'AttackRyu'
        ? `goo attacks Ryu for ${attack.damage} damage`
        : ''}
      {narration === 'AttackMarle'
        ? `${currentTurn} attacks Marle for ${attack.damage} damage`
        : ''}
      {narration === 'Healing'
        ? `${currentTurn} heals ${target[1].name} for ${attack.damage} hp`
        : ''}
      {narration === 'GooQuivers' ? `${currentTurn} quivers emphatically` : ''}
      {narration === 'Start' ? 'You wake up' : ''}
      {narration === 'Fight' ? 'Enter the ring' : ''}
      {narration === 'Town' ? 'You enter the town' : ' '}
      {narration === 'Home' ? 'You go back home' : ''}
    </div>
  );
}
