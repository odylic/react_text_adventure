import React, {useState, createContext} from 'react';

export const AttackContext = createContext();

export const AttackProvider = (props) => {
  const [attack, setAttack] = useState();
  return (
    <AttackContext.Provider value={[attack, setAttack]}>
      {props.children}
    </AttackContext.Provider>
  );
};
