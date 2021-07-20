import React, {useContext} from 'react';
import {QueueContext} from '../../../contexts/QueueContext';
import {TextContext} from '../../../contexts/TextContext';
import {NarrationContext} from '../../../contexts/NarrationContext';
import {ViewContext} from '../../../contexts/ViewContext';
import {EnemyContext} from '../../../contexts/EnemyContext';

export default function End() {
  const {queueArr, currentArr} = useContext(QueueContext);
  const [queue, setQueue] = queueArr;
  const [currentTurn, setCurrentTurn] = currentArr;
  const [text, setText] = useContext(TextContext);
  const [narration, setNarration] = useContext(NarrationContext);
  const [view, setView] = useContext(ViewContext);
  const [enemy, setEnemyState] = useContext(EnemyContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          // continues the queue
          setCurrentTurn(queue[1]);
          let temp = queue[0];
          setQueue([...queue.slice(1), temp]);
          setText('Start');
          setNarration('End');

          // have a check to see if hp<0, change status to dead
          Object.values(enemy).map((monster, index) => {
            if (monster.hp <= 0) {
              setEnemyState((prevState) => ({
                ...prevState,
                // use [] to have it recognize as a variable
                [index]: {
                  ...enemy[index],
                  dead: true,
                },
              }));
            }
          });
        }}
      >
        Next
      </button>
    </div>
  );
}
