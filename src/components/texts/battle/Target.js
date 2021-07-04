import React, {useContext} from 'react';
import {EnemyContext} from '../../../contexts/EnemyContext';
import {TextContext} from '../../../contexts/TextContext';

export default function Target() {
  const [enemy, setEnemyState] = useContext(EnemyContext);
  const [text, setText] = useContext(TextContext);
  return (
    <div>
      {Object.values(enemy).map((monster, index) => (
        <div key={index}>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(typeof(index), index)
              setEnemyState((prevState) => ({
                ...prevState,
                // make it realize i'm referencing a variable instead of a string
                [index]: {
                  ...enemy[index],
                  hp: enemy[index].hp - 2,
                },
              }));
            }}
          >
            Enemy {index}
            <br></br>
            {monster.type}
          </button>
        </div>
      ))}
    </div>
  );
}

// <div>
//   <button
//     onClick={(e) => {
//       e.preventDefault();
//       setEnemyState((prevState) => ({
//         ...prevState,
//         0: {
//           ...enemy[0],
//           hp: enemy[0].hp - 2,
//         },
//       }));
//     }}
//   >
//     {enemy[0].type}
//   </button>
//   <br></br>
// </div>;