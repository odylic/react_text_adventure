import React, {useEffect, useContext} from 'react';
import {EnemyContext} from '../../../../contexts/EnemyContext';
import {PlayerContext} from '../../../../contexts/PlayerContext';
import {QueueContext} from '../../../../contexts/QueueContext';
import {TextContext} from '../../../../contexts/TextContext';
import {NarrationContext} from '../../../../contexts/NarrationContext';
import {AttackContext} from '../../../../contexts/AttackContext';

export default function Faerie() {
  const [enemy, setEnemyState] = useContext(EnemyContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [narration, setNarration] = useContext(NarrationContext);
  const [text, setText] = useContext(TextContext);
  const {queueArr, currentArr} = useContext(QueueContext);
  const [queue, setQueue] = queueArr;
  const [currentTurn, setCurrentTurn] = currentArr;
  const [attack, setAttack] = useContext(AttackContext);
  useEffect(() => {
    console.log(enemy);
  });

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setNarration('EnemyAttacking');
          setText('End');
          // make damage random select player

          const actions = {
            0: function () {
              setPlayerState((prevState) => ({
                ...prevState,
                0: {
                  ...prevState[0],
                  hp: prevState[0].hp - 1,
                },
              }));
              setAttack({damage: 1, cost: 0});
              setNarration('AttackRyu');
            },
            1: function () {
              setPlayerState((prevState) => ({
                ...prevState,
                1: {
                  ...prevState[1],
                  hp: prevState[1].hp - 1,
                },
              }));
              setAttack({damage: 1, cost: 0});
              setNarration('AttackMarle');
            },
            2: function () {
              setPlayerState((prevState) => ({
                ...prevState,
                0: {
                  ...prevState[0],
                  hp: prevState[0].hp - 2,
                },
              }));
              setAttack({damage: 2, cost: 0});
              setNarration('AttackRyu');
            },
            3: function () {
              setPlayerState((prevState) => ({
                ...prevState,
                1: {
                  ...prevState[1],
                  hp: prevState[1].hp - 2,
                },
              }));
              setAttack({damage: 2, cost: 0});
              setNarration('AttackMarle');
            },
          };

          const length = Object.keys(actions).length;
          const randomNum = Math.floor(Math.random() * length);

          // console.log(randomNum);

          actions[randomNum]();
        }}
      >
        Next
      </button>
    </div>
  );
}
