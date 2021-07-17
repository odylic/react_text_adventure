import React, {useEffect, useState, useContext} from 'react';
import {EnemyContext} from '../contexts/EnemyContext';
import Goo from './texts/battle/enemies/Goo';
import Goblin from './texts/battle/enemies/Goblin';

export default function EnemyState() {
  // initial state set in EnemyContext
  const [enemy, setEnemyState] = useContext(EnemyContext);
  useEffect(() => {
    // console.log('enemy: ', enemy);
    // Object.values(enemy).map((monster, index) => {
    //   if (monster.hp < 0)
    //     setEnemyState((state) => ({
    //       ...state,
    //       [index]: {
    //         ...enemy[index],
    //         dead: true,
    //       },
    //     }));
    // });
  }, []);

  return (
    <div className="EnemyState">
      {Object.values(enemy).map((monster, index) => (
        <div key={index}>
          Enemy {index + 1} <br></br>
          {monster.type} <br></br>
          {monster.hp > 0 ? monster.hp : 'dead'} <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}
