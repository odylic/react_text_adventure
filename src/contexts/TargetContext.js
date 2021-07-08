import React, {useState, createContext} from 'react';

export const TargetContext = createContext();

export const TargetProvider = (props) => {
  const [target, setTarget] = useState();
  return (
    <TargetContext.Provider value={[target, setTarget]}>
      {props.children}
    </TargetContext.Provider>
  );
};
