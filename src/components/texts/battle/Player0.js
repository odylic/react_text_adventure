import React, {useContext, useEffect} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import {AttackContext} from '../../../contexts/AttackContext';
import {NarrationContext} from '../../../contexts/NarrationContext';

export default function Player0() {
  const [text, setText] = useContext(TextContext);
  const [attack, setAttack] = useContext(AttackContext);
  const [narration, setNarration] = useContext(NarrationContext);
  useEffect(() => {
    // console.log(attack);
  });
  return (
    <div>
      {/* back */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Start');
          setNarration('Start')
        }}
      >
        Back
      </button>
      <br></br>
      <br></br>
      {/* attack */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Target');
          setAttack({damage: 1, cost: 0});
          setNarration('Target');
        }}
      >
        Attack
      </button>
      <br></br>
      {/* technique */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Techniques');
          setNarration('Choose');
        }}
      >
        Technique
      </button>
      <br></br>
      {/* magic */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Magic');
          setNarration('Choose');
        }}
      >
        Magic
      </button>
      <br></br>
      {/* items */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Item');
          setNarration('Choose');
        }}
      >
        Items
      </button>
    </div>
  );
}
