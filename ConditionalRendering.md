# if statements

function LoggedStatus(props) {
const isLoggedIn = props.isLoggedIn;
if (isLoggedIn) {
return "Logged out";
}
return 'LoggedIn';
}

<LoggedStatus isLoggedIn={false} />


# Enumerate States in an object

// const Foo = () => {
// return <button>FOO</button>;
// };
// const ENUM_STATES = {
// foo: <Foo />,
// test: 'testing a string',
// };
// function EnumState({state}) {
// return <div>{ENUM_STATES[state]} </div>;
// }


{/_ <EnumState state="test" /> _/}


# Switch Statements


// function SwitchCase(props) {
// switch (props.value) {
  // case 'Start':
  // return 'You see enemies about to attack';
  // case 'Target':
  // return 'Which do you want to Target?';
  // case 'Choose':
  // return 'What do you want to do?';
  // case 'Attacking':
  // return `${player[0].name} is attacking ${target.type} for ${attack.damage} damage`;
  // }
  // }

{/_ <SwitchCase value={narration} /> _/}




// function SwitchCase(props) {
  // switch (props.value) {
    // case 'EnterBattle':
    // return <EnterBattle />;
    // case 'Player0':
    // return <Player0 />;
    // case 'Attack':
    // return <Attack />;
    // case 'Target':
    // return <Target />;
    // case 'Player1':
    // return <Player1 />;
    // case 'Techniques':
    // return <Techniques />;
    // case 'Magic':
    // return <Magic />;
    // case 'Item':
    // return <Item />;
    // case 'TargetTech':
    // return <TargetTech />;
    // case 'TargetMagic':
    // return <TargetMagic />;
    // }
    // }


