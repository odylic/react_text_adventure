# examples of useReducer to update state simpler

const reducer = (prevState, updatedProperty) => ({
...prevState,
...updatedProperty,
});

const initState = {
name: 'bob',
age: 25,
};

const [state, setState] = useReducer(reducer, initState);

<div>
  {Object.entries(state).map(item => (
    <div>
      {item[0]}: {item[1]}
    </div>
  ))}
</div>
<button
  onClick={async (e) => {
    e.preventDefault()
    setState({name: 'alice'})
  }}
>Use Reducer</button>
<br></br>



# original example from MDN

const initialState = {count: 0};

const reducer = (state, action) => {
switch (action.type) {
case 'increment':
return {count: state.count + 1};
case 'decrement':
return {count: state.count - 1};
default:
throw new Error();
}
};
const [state, dispatch] = useReducer(reducer, initialState);

<div>
  Count: {state.count} <br></br>
  <button
    onClick={async (e) => {
      e.preventDefault();
      dispatch({type: 'increment'});
    }}
  >
    +
  </button>
  <button
    onClick={async (e) => {
      e.preventDefault()
      dispatch({type:'decrement'})
    }}
  >
    -
  </button>
</div>




