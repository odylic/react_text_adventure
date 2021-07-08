import React, {useState, createContext} from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = (props) => {
  const [player, setPlayerState] = useState({
    0: {
      name: 'Ryu',
      lvl: 1,
      hp: 10,
      exp: 10,
      mana: 8,
      job: 'squire',
      sp: 5,
      equipment: {
        helmet: 'bronze helmet',
        leftHand: 'iron sword',
      },
      techniques: {
        0: {
          name: 'slash',
          cost: 1,
          damage: 3,
        },
        1: {
          name: 'swift strike',
          cost: 2,
          damage: 4,
        },
      },
      magic: {
        0: {
          name: 'fire',
          cost: 1,
          damage: 6,
        },
      },
    },
    1: {
      name: 'Marle',
      lvl: 1,
      hp: 8,
      exp: 10,
      mana: 15,
      job: 'white mage',
      sp: 5,
      equipment: {
        bothHands: 'crossbow',
      },
      techniques: {
        0: {
          name: 'quick shot',
          cost: '1',
          damage: '2',
        },
      },
      magic: {
        0: {
          name: 'cure',
          damage: 5,
          cost: 1,
        },
      },
    },
  });
  return (
    <PlayerContext.Provider value={[player, setPlayerState]}>
      {props.children}
    </PlayerContext.Provider>
  );
};
