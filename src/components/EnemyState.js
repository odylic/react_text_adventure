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
          Enemy {index} <br></br>
          {console.log(monster)}
          {monster.type} <br></br>
          {monster.hp} <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}