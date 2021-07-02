import React, {useEffect, useState, useContext} from 'react';
import {EnemyContext} from '../contexts/EnemyContext';
import Goo from './enemies/Goo';
import Goblin from './enemies/Goblin';

export default function EnemyState() {
  // initial state set in EnemyContext
  const [enemy, setEnemyState] = useContext(EnemyContext);
  useEffect(() => {
    console.log('enemy: ', enemy);
  });

  return (
    <div className="EnemyState">
      {enemy.map((monster, index) => (
        <div key={index}>
          {monster.hp < 0
            ? `${monster.type} died`
            : `Enemy ${index+1}:
               ${monster.type} 
               hp: ${monster.hp}`}
        </div>
      ))}

    </div>
  );
}
