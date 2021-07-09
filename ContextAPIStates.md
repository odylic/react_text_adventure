
# Context APIs, put values in an object

<GameContext.Provider
value={{ 
  name: [name, setName], 
  color: [color, setColor] 
  }}

> {props.children}
> </GameContext.Provider>;


# destructure the keys in the child

const { name, color } = useContext(GameContext);
const [nameValue, setnameValue] = name;
const [colorValue, setcolorValue] = color;



# Use Reducer, declare reducer function and inistial state
# declare the const [state, dispatch] = useReducer(reducer, initialState)

import React, { useState, useReducer, createContext } from 'react';

const initialState = {
name: '',
color: '',
startgame: false
}

function reducer(state, action) {
return { ...state, ...action };
}

const GameContext = createContext();

const GameProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);

return (
<GameContext.Provider value={{ state, dispatch }}>
{children}
</GameContext.Provider>
);
};

export { GameContext, GameProvider };


# in child component
import { GameContext } from '../../context/GameContext';

...
# destructure in the state, the keys: name, color
# any dispatch will set the state
const { state: { name, color }, dispatch } = useContext(GameContext);
console.log(name);
console.log(color);

# name will be set to the value of the button
// event handler
const handleChangeName = (event) => {
  dispatch({ name: event.target.value });
}

# color will be set the value of the button
const handleChangeColor = (event) => {
  dispatch({ color: event.target.value });
}


# useReducer with switch statement

const { useReducer } = React

const initialState = {count: 0};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return { count: state.count + 1 };
    case 'DECREMENT':
    return { count: state.count - 1 };
    default:
    throw new Error();
    }
  };

const App = () => {
const [state, dispatch] = useReducer(counterReducer, initialState);

const handleIncrease = () => {
dispatch({ type: 'INCREMENT' });
};

const handleDecrease = () => {
dispatch({ type: 'DECREMENT' });
};

return (
<div className="box">
<h1>Counter</h1>
<p>Count: {state.count}</p>

      <div>
        <button type="button" onClick={handleIncrease}className="button is-grey">
          +
        </button>
        <button type="button" onClick={handleDecrease} className="button is-dark">
          -
        </button>
      </div>
    </div>

);
}

ReactDOM.render(<App />, document.getElementById("root"));









# more complex useReducer example

# has nested properties with objects
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: []
      },
    store: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 }
      ]
    };


 # reducer cases
const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
    return {
      ...state,
      additionalPrice: state.additionalPrice - action.item.price,
      car: { ...state.car, features: state.car.features.filter((x) => x.id !== action.item.id)},
      store: [...state.store, action.item]
    };
    case "BUY_ITEM":
      return {
      ...state,
      additionalPrice: state.additionalPrice + action.item.price,
      car: { ...state.car, features: [...state.car.features, action.item] },
      store: state.store.filter((x) => x.id !== action.item.id)
      }
    default:
      return state;
    }
  }


# in app
const App = () => {
const inputRef = useRef();
const [state, dispatch] = useReducer(reducer, initialState);

const removeFeature = (item) => {
  dispatch({ type: 'REMOVE_ITEM', item });
}

const buyItem = (item) => {
  dispatch({ type: 'BUY_ITEM', item })
}

return (
  <div>
  <div className="box">
  <figure className="image is-128x128">
  <img src={state.car.image} />
    </figure>
    <h2>{state.car.name}</h2>
    <p>Amount: \${state.car.price}</p>
    <div className="content">
    <h6>Extra items you bought:</h6>
    {state.car.features.length ?
    (
  <ol type="1">
  {state.car.features.map((item) => (
    <li key={item.id}>
      <button
        onClick={() => removeFeature(item)}
        className="button">X
    </button>
    {item.name}
    </li>
    ))}
    </ol>
  ) : <p>You can purchase items from the store.</p>
  }
  </div>
  </div>
  <div className="box">
  <div className="content">
  <h4>Store:</h4>
  {state.store.length ?
  (
  <ol type="1">
    {state.store.map((item) => (
  <li key={item.id}>\
  <button
    onClick={() => buyItem(item)}
    className="button">Buy
  </button>
  {item.name}
  </li>
  ))}
  </ol>
  ) : <p>No features</p>
  }
</div>

        <div className="content">
        <h4>
          Total Amount: ${state.car.price + state.additionalPrice}
        </h4>
      </div>
      </div>
    </div>

);
}
