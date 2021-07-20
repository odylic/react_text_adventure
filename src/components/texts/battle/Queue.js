import React, {useContext, useEffect, useState} from 'react';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {EnemyContext} from '../../../contexts/EnemyContext';
import {QueueContext} from '../../../contexts/QueueContext';

export default function Queue() {
  const {queueArr, currentArr} = useContext(QueueContext);
  const [queue, setQueue] = queueArr;
  const [currentTurn, setCurrentTurn] = currentArr;

  const [player, setPlayerState] = useContext(PlayerContext);
  const [enemy, setEnemyState] = useContext(EnemyContext);

  const temp = [];
  const playerEntries = Object.entries(player);
  const enemyEntries = Object.entries(enemy);
  playerEntries.map((entries, index) => {
    if (entries[1].hp > 0) temp.push(entries[1].name);
  });
  enemyEntries.map((entries, index) => {
    if (entries[1].hp > 0) temp.push(entries[1].type);
  });

  useEffect(() => {
    // console.log(temp);
    // setQueue(tempObj);
    // console.log(tempObj);
    // adding this [] makes useEffect only run once, but otherwise, setQueue in useEffect keeps making it rerender
    setQueue(temp);
    // console.log(temp);
  }, []);

  return (
    <div className="Queue">
      Order List:
      {/* {Object.values(tempObj).map((turn, index) => (
        <div key={index} className="turn">
          {turn}
        </div>
      ))} */}
      {/* {Object.values(queue)} */}
      {queue.map((turn, index) => (
        <div key={index} className="turn">
          {turn}
        </div>
      ))}
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();

            setCurrentTurn(queue[1]);
            let temp = queue[0];
            setQueue([...queue.slice(1), temp]);
            // console.log(queue);
            // console.log(currentTurn);
          }}
        >
          Queue Shift
        </button>{' '}
        <br></br>
        <br></br>
        Current Turn: {currentTurn}
      </div>
    </div>
  );
}
