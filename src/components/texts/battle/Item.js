import React,{useContext, useEffect} from 'react'
import { TextContext } from '../../../contexts/TextContext';
import { InventoryContext } from '../../../contexts/InventoryContext';

export default function Item() {
  const [text, setText]= useContext(TextContext)
  const [inventory, setInventory] = useContext(InventoryContext)
  useEffect(() => {
    console.log()
  })
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setText('Player0');
        }}
      >
        Back
      </button>

      <br></br>
      <br></br>
      {Object.entries(inventory).map((item, index) => (
        <div key={index}>
          <button>
            {item[0]} : {item[1]}
          </button>
        </div>
      ))}
    </div>
  );
}
