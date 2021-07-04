import React, {useEffect, useState, useContext} from 'react';
import {EnemyContext} from '../contexts/EnemyContext';
import Goo from './enemies/Goo';
import Goblin from './enemies/Goblin';

export default function EnemyState() {
  // initial state set in EnemyContext
  const [enemy, setEnemyState] = useContext(EnemyContext);
  useEffect(() => {
    // console.log('enemy: ', enemy);
  });

  return (
    <div className="EnemyState">
      {Object.values(enemy).map((monster, index) => (
        <div key={index}>
          Enemy {index + 1} <br></br>
          {monster.type} <br></br>
          {monster.hp > 0 ? monster.hp : 0} <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}
