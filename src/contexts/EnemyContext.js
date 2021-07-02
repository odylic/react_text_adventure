import React, {useState, createContext} from 'react';

export const EnemyContext = createContext();

export const EnemyProvider = (props) => {
  const [enemy, setEnemyState] = useState([
    {
      type: 'goo',
      hp: 5,
    },
    {
      type: 'goblin',
      hp: 8,
    },
    {
      type: 'faerie',
      hp: 2,
    },
  ]);

  return (
    <EnemyContext.Provider value={[enemy, setEnemyState]}>
      {props.children}
    </EnemyContext.Provider>
  );
};
