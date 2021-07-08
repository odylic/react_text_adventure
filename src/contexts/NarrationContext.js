import React, {useState, createContext} from 'react';

export const NarrationContext = createContext();

export const NarrationProvider = (props) => {
  const [narration, setNarration] = useState('Start');
  return (
    <NarrationContext.Provider value={[narration, setNarration]}>
      {props.children}
    </NarrationContext.Provider>
  );
};
