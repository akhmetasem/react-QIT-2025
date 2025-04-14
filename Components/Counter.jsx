import React, { useReducer } from 'react'

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 1 }
    case "RESET":
      return { count: 0 }
    default:
      return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <div>
      <h1 style={{ color: "yellow", background:"black" }} >Counter: {state.count}</h1>
      <button style={{ color: "red",background:"pink",border:"120px" }} onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button style={{ color: "red",background:"pink", border:"90px" }} onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
      <button style={{ color: "green", background:"pink",border:"120px" }}  onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  )
}

export default Counter;
