import React, {useContext} from 'react';
import {QueueContext} from '../../../contexts/QueueContext';
import {TextContext} from '../../../contexts/TextContext';
import {NarrationContext} from '../../../contexts/NarrationContext';

export default function End() {
  const {queueArr, currentArr} = useContext(QueueContext);
  const [queue, setQueue] = queueArr;
  const [currentTurn, setCurrentTurn] = currentArr;
  const [text, setText] = useContext(TextContext);
  const [narration, setNarration] = useContext(NarrationContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCurrentTurn(queue[1]);
          let temp = queue[0];
          setQueue([...queue.slice(1), temp]);
          setText('Start');
          setNarration('End');
        }}
      >
        Next
      </button>
    </div>
  );
}
