import React, {useState, createContext} from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = (props) => {
  const [inventory, setInventory] = useState({
    potions: 5,
    tonic: 2,
    antidote: 3,
  });
  return (
    <InventoryContext.Provider value={[inventory, setInventory]}>
      {props.children}
    </InventoryContext.Provider>
  );
};
