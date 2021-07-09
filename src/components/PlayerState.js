import React, {useEffect, useState, useContext} from 'react';
import {PlayerContext} from '../contexts/PlayerContext';
import {InventoryContext} from '../contexts/InventoryContext';

export default function PlayerState() {
  const [player, setPlayerState] = useContext(PlayerContext);
  const {inventoryArr} = useContext(InventoryContext);
  const [inventory, setInventory] = inventoryArr;
  const [view, setView] = useState('status');
  useEffect(() => {
    // console.log('player: ', player);
  });

  return (
    <div className="PlayerState">
      {/* button that switches to status */}
      <button
        onClick={async (e) => {
          e.preventDefault();
          setView('status');
        }}
      >
        Status
      </button>
      {/* button that switches to equipment */}
      <button
        onClick={async (e) => {
          e.preventDefault();
          setView('equipment');
        }}
      >
        Equipment
      </button>
      {/* button that switches to inventory */}
      <button
        onClick={async (e) => {
          e.preventDefault();
          setView('inventory');
        }}
      >
        Inventory
      </button>{' '}
      <br></br>
      {/* renders the status screen */}
      {view === 'status' ? (
        <div>
          {Object.values(player).map((character, index) => (
            <div key={index}>
              {character.name}
              <br></br>
              lvl : {character.lvl} <br></br>
              hp: {character.hp} <br></br>
              exp: {character.exp} <br></br>
              mana: {character.mana > 0 ? character.mana : 0} <br></br>
              <br></br>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
      {/* renders the inventory screen */}
      {view === 'inventory' ? (
        <div>
          items:
          {Object.entries(inventory).map((item, index) => (
            <ul key={index}>
              {item[0]}: {item[1].count}
            </ul>
          ))}
        </div>
      ) : (
        ''
      )}
      {/* renders the equipment screen */}
      {view === 'equipment' ? (
        <div>
          {Object.values(player).map((character, index) => (
            <div key={index}>
              {character.name} <br></br>
              helmet: {character.equipment.helmet} <br></br>
              {character.equipment.bothHands ? (
                <div>both hands: {character.equipment.bothHands}</div>
              ) : (
                <div>
                  right hand: {character.equipment.rightHand} <br></br>
                  left hand: {character.equipment.leftHand} <br></br>
                </div>
              )}
              armor: {character.equipment.armor} <br></br>
              boots: {character.equipment.boots} <br></br>
              <br></br>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
