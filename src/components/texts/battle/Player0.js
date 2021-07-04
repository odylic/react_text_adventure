import React, {useContext} from 'react';
import {TextContext} from '../../../contexts/TextContext';
import Attack from './Attack';

export default function Player0() {
  const [text, setText] = useContext(TextContext);
  return (
    <div>
      {/* back */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Start');
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
        }}
      >
        Items
      </button>
    </div>
  );
}
