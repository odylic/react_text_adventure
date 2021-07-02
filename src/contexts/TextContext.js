import React, {useState, createContext} from 'react';

export const TextContext = createContext();

export const TextProvider = (props) => {
  const [text, setText] = useState('');
  return (
    <TextContext.Provider value={[text, setText]}>
      {props.children}
    </TextContext.Provider>
  );
};
