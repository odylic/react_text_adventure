import React, { useContext } from 'react';
import {PlayerContext} from '../../contexts/PlayerContext';
import {InventoryContext} from '../../contexts/InventoryContext';
import {EnemyContext} from '../../contexts/EnemyContext';
import {TextContext} from '../../contexts/TextContext';

export default function EnterBattle() {
  const [inventory, setInventory] = useContext(InventoryContext);
  const [player, setPlayerState] = useContext(PlayerContext);
  const [enemy, setEnemyState] = useContext(EnemyContext);
  const [text, setText] = useContext(TextContext);
  return (
    <div className="Text">
      <button
        onClick={async (e) => {
          e.preventDefault();
          // sets the state, prev state is player
          setPlayerState((prevState) => [
            // spreads the previous state
            {
              ...prevState[0],
              exp: prevState[0].exp + 5,
            },
            {
              ...prevState[1],
            },
          ]);
        }}
      >
        Exp+1
      </button>
      <br></br>
      {/* affect inventory */}
      <button
        onClick={async (e) => {
          e.preventDefault();
          // sets the state
          setInventory((prevState) => ({
            // spreads the previous state
            ...prevState,
            // nested object inside state
            potions: prevState.potions + 1,
          }));
          // console.log(player);
        }}
      >
        Add Items
      </button>
      <br></br>
      {/* affect enemy */}
      <button
        onClick={async (e) => {
          e.preventDefault();
          setEnemyState((prevState) => [
            {
              ...prevState[0],
              hp: prevState[0].hp - 2,
            },
            {...prevState[1]},
            {...prevState[2]},
          ]);
        }}
      >
        Marle Shoots CrossBow
      </button>
      <br></br>
      Battle And every things that goes with this
    </div>
  );
}
