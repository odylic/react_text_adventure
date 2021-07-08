import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {EnemyContext} from '../../../contexts/EnemyContext';
import {AttackContext} from '../../../contexts/AttackContext';
import {PlayerTurnContext} from '../../../contexts/PlayerTurnContext';
import {NarrationContext} from '../../../contexts/NarrationContext';
import {TargetContext} from '../../../contexts/TargetContext';

export default function Target() {
  const [text, setText] = useContext(TextContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [enemy, setEnemyState] = useContext(EnemyContext);
  const [attack, setAttack] = useContext(AttackContext);
  const [playerTurn, setPlayerTurn] = useContext(PlayerTurnContext);
  const [narration, setNarration] = useContext(NarrationContext);
  const [target, setTarget] = useContext(TargetContext);
  useEffect(() => {
    // console.log(attack);
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
      {Object.values(enemy).map((monster, index) => (
        <div key={index}>
          <button
            onClick={(e) => {
              e.preventDefault();
              // damage to enemy
              setEnemyState((prevState) => ({
                ...prevState,
                // use [] to have it recognize as a variable
                [index]: {
                  ...enemy[index],
                  hp: enemy[index].hp - attack.damage,
                },
              }));
              // mana cost to player
              setPlayerState((prevState) => ({
                ...prevState,
                0: {
                  ...prevState[0],
                  mana: prevState[0].mana - attack.cost,
                },
              }));
              setText('Start');
              setPlayerTurn('Player1');
              setNarration('Attacking');
              setTarget(enemy[index])
            }}
          >
            Enemy {index + 1}
            <br></br>
            {monster.type}
          </button>
        </div>
      ))}
    </div>
  );
}
