import React, {useContext} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import Attack from './Attack';

export default function Player0() {
  const [text, setText] = useContext(TextContext);
  return (
    <div>
      {/* attack */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Target');
        }}
      >
        Attack
      </button> 
      <br></br>
      {/* technique */}
      <button>Technique</button>
      <br></br>
      {/* magic */}
      <button>Magic</button>
      <br></br>
      {/* items */}
      <button>Items</button>
    </div>
  );
}
