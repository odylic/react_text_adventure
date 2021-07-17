import React, {useState, createContext} from 'react';

export const ViewContext = createContext();

export const ViewProvider = (props) => {
  const [view, setView] = useState('Story');
  return (
    <ViewContext.Provider value={[view, setView]}>
      {props.children}
    </ViewContext.Provider>
  );
};
