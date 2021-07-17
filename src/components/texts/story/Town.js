import React, {useContext} from 'react';
import {NarrationContext} from '../../../contexts/NarrationContext';
import {TextContext} from '../../../contexts/TextContext';
import {ViewContext} from '../../../contexts/ViewContext';

export default function Town() {
  const [narration, setNarration] = useContext(NarrationContext);
  const [text, setText] = useContext(TextContext);
  const [view, setView] = useContext(ViewContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setNarration('Home');
          setText('Story');
        }}
      >
        Go home
      </button>
      
    </div>
  );
}
