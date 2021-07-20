import React, {useState, createContext} from 'react';

export const EnemyContext = createContext();

export const EnemyProvider = (props) => {
  const [enemy, setEnemyState] = useState({ });

  return (
    <EnemyContext.Provider value={[enemy, setEnemyState]}>
      {props.children}
    </EnemyContext.Provider>
  );
};
