import React, {useContext, useEffect} from 'react';
import {NarrationContext} from '../contexts/NarrationContext';
import {PlayerContext} from '../contexts/PlayerContext';
import {PlayerTurnContext} from '../contexts/PlayerTurnContext';
import {AttackContext} from '../contexts/AttackContext';
import {TargetContext} from '../contexts/TargetContext';

export default function Narration() {
  const [narration, setNarration] = useContext(NarrationContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [playerTurn, setPlayerTurn] = useContext(PlayerTurnContext);
  const [attack, setAttack] = useContext(AttackContext);
  const [target, setTarget] = useContext(TargetContext);

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
    </div>
  );
}
