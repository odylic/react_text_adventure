import React, {useEffect, useContext} from 'react';
import {EnemyContext} from '../../../../contexts/EnemyContext';
import {PlayerContext} from '../../../../contexts/PlayerContext';
import {QueueContext} from '../../../../contexts/QueueContext';

export default function Goo() {
  const [enemy, setEnemyState] = useContext(EnemyContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const {queueArr, currentArr} = useContext(QueueContext);
  const [queue, setQueue] = queueArr;
  const [currentTurn, setCurrentTurn] = currentArr;
  useEffect(() => {
    console.log(enemy);
  });
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCurrentTurn(queue[1]);
          let temp = queue[0];
          setQueue([...queue.slice(1), temp]);
        }}
      >
        Next
      </button>
    </div>
  );
}
