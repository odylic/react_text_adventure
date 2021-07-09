import React, {useContext, useEffect, useState} from 'react';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {EnemyContext} from '../../../contexts/EnemyContext';

export default function Queue() {
  const [player, setPlayerState] = useContext(PlayerContext);
  const [enemy, setEnemyState] = useContext(EnemyContext);
  const queue = [];
  const playerEntries = Object.entries(player);
  playerEntries.map((entries, index) => {
    queue.push(entries[1].name);
  });
  const enemyEntries = Object.entries(enemy);
  enemyEntries.map((entries, index) => {
    queue.push(entries[1].type);
  });

  useEffect(() => {
    // console.log(queue);
  });

  return (
    <div className="Queue">
      Order List:
      {queue.map((turn, index) => (
        <div key={index} className="turn">{turn}</div>
      ))}
    </div>
  );
}
