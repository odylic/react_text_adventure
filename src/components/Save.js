import React, {useEffect, useContext} from 'react';
import {TextContext} from '../contexts/TextContext';

export default function Save() {
  const [text, setText] = useContext(TextContext);

  useEffect(async () => {
    const response = await fetch('/sql/text');
    const data = await response.json();
    // console.log(data[0].text_state);
  });
  return (
    <div className="Save">
      <button
        onClick={(e) => {
          e.preventDefault();
          fetch('/sql/text', {
            method: 'PUT',
            body: JSON.stringify({
              text_state: text,
            }),
            headers: {'Content-Type': 'application/json'},
          });
        }}

      >
        Save
      </button>
    </div>
  );
}
