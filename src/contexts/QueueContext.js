import React, {useContext, useState, createContext} from 'react';

export const QueueContext = createContext();

export const QueueProvider = (props) => {
  const [queue, setQueue] = useState([1, 2]);
  const [currentTurn, setCurrentTurn] = useState('Ryu');

  return (
    <QueueContext.Provider
      value={{
        queueArr: [queue, setQueue],
        currentArr: [currentTurn, setCurrentTurn],
      }}
    >
      {props.children}
    </QueueContext.Provider>
  );
};
