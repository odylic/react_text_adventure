import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {EnemyContext} from '../../../contexts/EnemyContext';
import {AttackContext} from '../../../contexts/AttackContext';

export default function Techniques() {
  const [text, setText] = useContext(TextContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [enemy, setEnemyState] = useContext(EnemyContext);
  const [attack, setAttack] = useContext(AttackContext);
  useEffect(() => {
    console.log(attack);
  });
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Techniques');
        }}
      >
        Back
      </button>
      <br></br>
      <br></br>
      {Object.values(enemy).map((monster, index) => (
        <div key={index}>
          <button
            onClick={(e) => {
              e.preventDefault();
              // damage to enemy
              setEnemyState((prevState) => ({
                ...prevState,
                // use [] to have it recognize as a variable
                [index]: {
                  ...enemy[index],
                  hp: enemy[index].hp - attack.damage,
                },
              }));
              // mana cost to player
              setPlayerState((prevState) => ({
                ...prevState,
                0: {
                  ...prevState[0],
                  mana: prevState[0].mana - attack.cost,
                },
              }));
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
