/*import React, { useReducer,useEffect } from 'react'

const initialState = {
  currenColorIndex: 0
}
const colors = ["green", "red", "pink", "blue", "yellow", "black", "white"]

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        currenColorIndex: (state.currenColorIndex + 1) % colors.length
      }
    default:
      return state;
  }
}


function NewYearLights() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currenColor = colors[state.currenColorIndex];
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "NEXT_COLOR" });
    }, 5000);
    return () => clearInterval(interval); 
  }, []);
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0"
    }}>
      <h2 style={{ marginBottom: "20px" }}>New Year</h2>
      <div style={{
        backgroundColor: currenColor,
        borderRadius: "90px",
        width: "130px",
        height: "130px",
        marginBottom: "20px",
        boxShadow: "0 0 20px rgba(0,0,0,0.3)"
      }}>
      </div>
      <button 
        onClick={() => dispatch({ type: "NEXT_COLOR" })}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#333",
          color: "#fff",
         
        }}
      >
        Change color
      </button>
    </div>
  )
}

export default NewYearLights;
*/



/*import React, { useReducer,useEffect } from 'react'

const initialState = {
  currenColorIndex: 0
}
const colors = ["green", "red", "pink", "blue", "yellow", "black", "white"]

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        currenColorIndex: (state.currenColorIndex + 1) % colors.length
      }
    default:
      return state;
  }
}


function NewYearLights() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currenColor = colors[state.currenColorIndex];

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0"
    }}>
      <h2 style={{ marginBottom: "20px" }}>New Year</h2>
      <div style={{
        backgroundColor: currenColor,
        borderRadius: "90px",
        width: "130px",
        height: "130px",
        marginBottom: "20px",
        boxShadow: "0 0 20px rgba(0,0,0,0.3)"
      }}>
      </div>
      <button 
        onClick={() => dispatch({ type: "NEXT_COLOR" })}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#333",
          color: "#fff",
         
        }}
      >
        Change color
      </button>
    </div>
  )
}

export default NewYearLights;


*/














import React, { useReducer } from 'react'

const colors = ["green", "red", "pink", "blue", "yellow", "black", "white"]

const initialState = {
  currenColorIndex: 0
}

function reducer(state, action) {
  switch (action.type) {
    case "ARKALAI":
      return {
        currenColorIndex: Math.floor(Math.random() * colors.length)
      }
    default:
      return state;
  }
}

function NewYearLights() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currenColor = colors[state.currenColorIndex];

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0"
    }}>
      <h2 style={{ marginBottom: "20px" }}>New Year</h2>
      <div style={{
        backgroundColor: currenColor,
        borderRadius: "90px",
        width: "130px",
        height: "130px",
        marginBottom: "20px",
        boxShadow: "0 0 20px rgba(0,0,0,0.3)"
      }}>
      </div>
      <button
        onClick={() => dispatch({ type: "ARKALAI" })}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        Change color
      </button>
    </div>
  )
}

export default NewYearLights;













































































































