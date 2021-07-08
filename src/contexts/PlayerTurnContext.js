import React, {useState, createContext} from 'react';

export const PlayerTurnContext = createContext();

export const PlayerTurnProvider = (props) => {
  const [playerTurn, setPlayerTurn] = useState('Player0');
  return (
    <PlayerTurnContext.Provider value={[playerTurn, setPlayerTurn]}>
      {props.children}
    </PlayerTurnContext.Provider>
  );
};
