import React, {useContext} from 'react';
import {PlayerContext} from '../../../contexts/PlayerContext';
import {NarrationContext} from '../../../contexts/NarrationContext';
import {TextContext} from '../../../contexts/TextContext';

export default function EndScreen() {
  const [player, setPlayerState] = useContext(PlayerContext);
  const [narration, setNarration] = useContext(NarrationContext);
  const [text, setText] = useContext(TextContext);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          // increase exp
          Object.entries(player).map((character, index) => {
            // if exp is at certain amounts, level up
            Object.entries(player).map((character, index) => {
              if (character[1].exp >= 25) {
                setPlayerState((prevState) => ({
                  ...prevState,
                  [index]: {
                    ...prevState[index],
                    lvl: 2,
                  },
                }));
              }
              if (character[1].exp >= 50) {
                setPlayerState((prevState) => ({
                  ...prevState,
                  [index]: {
                    ...prevState[index],
                    lvl: 3,
                  },
                }));
              }
              if (character[1].exp >= 100) {
                setPlayerState((prevState) => ({
                  ...prevState,
                  [index]: {
                    ...prevState[index],
                    lvl: 4,
                  },
                }));
              }
              if (character[1].exp >= 200) {
                setPlayerState((prevState) => ({
                  ...prevState,
                  [index]: {
                    ...prevState[index],
                    lvl: 5,
                  },
                }));
              }
            });

            // increase exp and sp
            setPlayerState((prevState) => ({
              ...prevState,
              [index]: {
                ...prevState[index],
                exp: prevState[index].exp + 10,
                sp: prevState[index].sp + 5,
              },
            }));
          });

          setNarration('Town');
          setText('Town');
        }}
      >
        Next
      </button>
    </div>
  );
}
