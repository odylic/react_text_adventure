import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {AttackContext} from '../../../contexts/AttackContext';
import Attack from './Attack';

export default function Techniques() {
  const [text, setText] = useContext(TextContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [attack, setAttack] = useContext(AttackContext);
  useEffect(() => {
    console.log();
  });
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Player0');
        }}
      >
        Back
      </button>
      <br></br>
      <br></br>
      {Object.values(player[0].techniques).map((technique, index) => (
        <div key={index}>
          <button
            onClick={(e) => {
              e.preventDefault();
              setText('TargetTech');
              setAttack(technique);
            }}
          >
            {technique.name} <br></br>
            mana cost: {technique.cost}
          </button>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}
