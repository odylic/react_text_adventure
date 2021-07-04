import React, {useState, createContext} from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = (props) => {
  const [player, setPlayerState] = useState([
    {
      name: 'Ryu',
      lvl: 1,
      hp: 10,
      exp: 10,
      equipment: {
        helmet: 'bronze helmet',
        leftHand: 'iron sword',
      },
    },
    {
      name: 'Marle',
      lvl: 1,
      hp: 8,
      exp: 10,
      equipment: {
        bothHands: 'crossbow',
      },
    },
  ]);
  return (
    <PlayerContext.Provider value={[player, setPlayerState]}>
      {props.children}
    </PlayerContext.Provider>
  );
};
