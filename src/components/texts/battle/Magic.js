import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {AttackContext} from '../../../contexts/AttackContext';
import {PlayerTurnContext} from '../../../contexts/PlayerTurnContext';
import {NarrationContext} from '../../../contexts/NarrationContext';
import {QueueContext} from '../../../contexts/QueueContext';

export default function Magic() {
  const {queueArr, currentArr} = useContext(QueueContext);
  const [queue, setQueue] = queueArr;
  const [currentTurn, setCurrentTurn] = currentArr;
  const [text, setText] = useContext(TextContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [attack, setAttack] = useContext(AttackContext);
  const [playerTurn, setPlayerTurn] = useContext(PlayerTurnContext);
  const [narration, setNarration] = useContext(NarrationContext);
  useEffect(() => {});
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
      {/* renders player0's magic */}
      {currentTurn === 'Ryu' ? (
        <div>
          {Object.values(player[0].magic).map((spell, index) => (
            <div key={index}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setText('TargetMagic');
                  setAttack(spell);
                  setNarration('Target');
                }}
              >
                {spell.name} <br></br>
                mana cost: {spell.cost}
              </button>
              <br></br>
              <br></br>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
      {/* renders player1's magic */}
      {currentTurn === 'Marle' ? (
        <div>
          {Object.values(player[1].magic).map((spell, index) => (
            <div key={index}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setText('TargetMagic');
                  setAttack(spell);
                  setNarration('Target');
                }}
              >
                {spell.name} <br></br>
                mana cost: {spell.cost}
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
