import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {EnemyContext} from '../../../contexts/EnemyContext';
import {AttackContext} from '../../../contexts/AttackContext';
import {PlayerTurnContext} from '../../../contexts/PlayerTurnContext';
import {NarrationContext} from '../../../contexts/NarrationContext';
import {TargetContext} from '../../../contexts/TargetContext';
import {QueueContext} from '../../../contexts/QueueContext';

export default function Target() {
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
  let startTime;
  let timedHit;

  window.startTimer = function () {
    startTime = new Date();
  };
  window.reportTime = function () {
    timedHit = new Date() - startTime;
  };

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
            onMouseDown={(e) => {
              e.preventDefault();
              startTimer();
            }}
            onMouseUp={(e) => {
              e.preventDefault();
              reportTime();
            }}
            onClick={(e) => {
              e.preventDefault();

              if (timedHit >= 1000 && timedHit <= 1500) {
                // damage to enemy
                setNarration('CriticalHit');
                setEnemyState((prevState) => ({
                  ...prevState,
                  // use [] to have it recognize as a variable
                  [index]: {
                    ...enemy[index],
                    hp: enemy[index].hp - 2 * attack.damage,
                  },
                }));
              } else {
                // damage to enemy
                setNarration('Attacking');
                setEnemyState((prevState) => ({
                  ...prevState,
                  // use [] to have it recognize as a variable
                  [index]: {
                    ...enemy[index],
                    hp: enemy[index].hp - attack.damage,
                  },
                }));
              }
              // mana cost to player
              setPlayerState((prevState) => ({
                ...prevState,
                0: {
                  ...prevState[0],
                  mana: prevState[0].mana - attack.cost,
                },
              }));
              setText('End');
              setPlayerTurn('Player1');

              setTarget(enemy[index]);
              console.log(timedHit);
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
