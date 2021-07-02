import React, {useContext} from 'react';
import {EnemyContext} from '../../contexts/EnemyContext';

export default function Goo() {
  const [enemy, setEnemyState] = useContext(EnemyContext);
  return (
    <div>
      Goblin <br></br>
      hp: {enemy.hp}
    </div>
  );
}
