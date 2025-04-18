import React, { createContext, useContext, useReducer } from "react";
import "./App.css";

const MessageContext = createContext();
const useMessage = () => useContext(MessageContext);

const initialState = {
  message: "",
  type: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return { message: "✅ Сәтті хабарлама!", type: "success" };
    case "error":
      return { message: "❌ Қате!", type: "error" };
    case "clear":
      return { message: "Хабарламаны тазалау", type: "clear" };
    default:
      return state;
  }
};

const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
};

function App() {
  const { state, dispatch } = useMessage();

  return (
    <div>
      <h1>Message System</h1>
      <div className="container">
        <div className={`message ${state.type}`}>
          {state.message}
        </div>
        <button className="green" onClick={() => dispatch({ type: "success" })}>
          Сәтті хабарлама
        </button>
        <button className="red" onClick={() => dispatch({ type: "error" })}>
          Қате хабарлама
        </button>
        <button className="gray" onClick={() => dispatch({ type: "clear" })}>
          Тазалау
        </button>
      </div>
    </div>
  );
}

export default () => (
  <MessageProvider>
    <App />
  </MessageProvider>
);
