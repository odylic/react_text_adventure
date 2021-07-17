import React, {useState, createContext} from 'react';

export const EnemyContext = createContext();

export const EnemyProvider = (props) => {
  const [enemy, setEnemyState] = useState({
    0: {
      type: 'goo',
      hp: 5,
      dead: false,
    },
    1: {
      type: 'goblin',
      hp: 8,
      dead: false,
    },
    2: {
      type: 'faerie',
      hp: 2,
      dead: false,
    },
    3: {
      type: 'goo',
      hp: 5,
      dead: false,
    },
  });

  return (
    <EnemyContext.Provider value={[enemy, setEnemyState]}>
      {props.children}
    </EnemyContext.Provider>
  );
};
