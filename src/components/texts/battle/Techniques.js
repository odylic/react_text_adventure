import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {AttackContext} from '../../../contexts/AttackContext';
import {PlayerTurnContext} from '../../../contexts/PlayerTurnContext';
import {NarrationContext} from '../../../contexts/NarrationContext';

export default function Techniques() {
  const [text, setText] = useContext(TextContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [attack, setAttack] = useContext(AttackContext);
  const [playerTurn, setPlayerTurn] = useContext(PlayerTurnContext);
  const [narration, setNarration] = useContext(NarrationContext);
  useEffect(() => {
    console.log();
  });
  return (
    <div>
      {/* back button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          if (playerTurn === 'Player0') setText('Player0');
          if (playerTurn === 'Player1') setText('Player1');
          if (playerTurn === 'Player2') setText('Player2');
          setNarration('Choose');
        }}
      >
        Back
      </button>
      <br></br>
      <br></br>
      {/* render player0's techs */}
      {playerTurn === 'Player0' ? (
        <div>
          {Object.values(player[0].techniques).map((technique, index) => (
            <div key={index}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setText('TargetTech');
                  setAttack(technique);
                  setNarration('Target')
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
      ) : (
        ''
      )}
      {/* render player1's techs */}
      {playerTurn === 'Player1' ? (
        <div>
          {Object.values(player[1].techniques).map((technique, index) => (
            <div key={index}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setText('TargetTech');
                  setAttack(technique);
                  setNarration('Target')
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
      ) : (
        ''
      )}
    </div>
  );
}
