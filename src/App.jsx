import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <CustomButton count = {count} setCount={setCount}></CustomButton>
      <Button count = {count} setCount={setCount}></Button>
    </div>
  )
}

//component
function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }
  return (<button onClick={onClickHandler}>
    Increment
  </button>)
}
function Button(props){
  function onClickHandler(){
    props.setCount(props.count - 1);
  }
  return (<button onClick={onClickHandler}>
    Decrement
  </button>)
}
export default App;