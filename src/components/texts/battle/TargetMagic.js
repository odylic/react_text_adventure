import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {EnemyContext} from '../../../contexts/EnemyContext';
import {AttackContext} from '../../../contexts/AttackContext';
import {PlayerTurnContext} from '../../../contexts/PlayerTurnContext';
import {NarrationContext} from '../../../contexts/NarrationContext';
import {TargetContext} from '../../../contexts/TargetContext';

export default function Techniques() {
  const [text, setText] = useContext(TextContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [enemy, setEnemyState] = useContext(EnemyContext);
  const [attack, setAttack] = useContext(AttackContext);
  const [playerTurn, setPlayerTurn] = useContext(PlayerTurnContext);
  const [narration, setNarration] = useContext(NarrationContext);
  const [target, setTarget] = useContext(TargetContext);
  useEffect(() => {
    // console.log(attack);
  });
  return (
    <div>
      {/* back button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Magic');
          setNarration('Choose');
        }}
      >
        Back
      </button>
      <br></br>
      <br></br>
      {/* handles player0's state */}
      {playerTurn === 'Player0' ? (
        <div>
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
                  setNarration('Attacking');
                  setTarget(enemy[index]);
                }}
              >
                Enemy {index + 1}
                <br></br>
                {monster.type}
              </button>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
      {/* handles player1's state */}
      {playerTurn === 'Player1' ? (
        <div>
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
                    1: {
                      ...prevState[1],
                      mana: prevState[1].mana - attack.cost,
                    },
                  }));
                  setNarration('Attacking');
                  setTarget(enemy[index]);
                }}
              >
                Enemy {index + 1}
                <br></br>
                {monster.type}
              </button>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
