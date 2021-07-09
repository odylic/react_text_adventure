import React, {useState, createContext} from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = (props) => {
  const [inventory, setInventory] = useState({
    potions: {
      count: 5,
      effect: 10,
      description: 'heals for 10 hp',
    },
    tonic: {
      count: 2,
      effect: 5,
      description: 'heals for 5 hp',
    },
    antidote: {
      count: 3,
      effect: false,
      description: 'cures poison',
    },
  });
  const [chosen, setChosen] = useState();
  const [targetOfItem, setTargetOfItem] = useState();

  return (
    <InventoryContext.Provider
      value={{
        inventoryArr: [inventory, setInventory],
        chosenArr: [chosen, setChosen],
        targetOfItemArr: [targetOfItem, setTargetOfItem],
      }}
    >
      {props.children}
    </InventoryContext.Provider>
  );
};
