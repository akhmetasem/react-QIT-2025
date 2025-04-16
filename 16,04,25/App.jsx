import React, { useReducer, useEffect } from 'react';

const users = {
  SET_NAME: 'set_name',
  SAVE_START: 'save_start',
  SAVE_SUCCESS: 'save_success',
};

const initialState = {
  name: '',
  savedName: '',
  isSaving: false,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case users.SET_NAME:
      return { ...state, name: payload };
    case users.SAVE_START:
      return { ...state, isSaving: true };
    case users.SAVE_SUCCESS:
      return { ...state, savedName: payload, isSaving: false };
    default:
      return state;
  }
}

function Names() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const stored = localStorage.getItem('username');
    if (stored) {
      dispatch({ type:users.SAVE_SUCCESS, payload: stored });
    }
  }, []);

  const handleSave = () => {
    dispatch({ type:users.SAVE_START });
    setTimeout(() => {
      localStorage.setItem('username', state.name);
      dispatch({ type: users.SAVE_SUCCESS, payload: state.name });
    }, 1000);
  };

  return (
    <div>
      <h2>Атыңызды жазыңыз:</h2>
      <input
        value={state.name}
        onChange={(e) =>
          dispatch({ type: users.SET_NAME, payload: e.target.value })
        }
      />
      <button onClick={handleSave}>
        Сақтау
      </button>

   

      {state.savedName && !state.isSaving && (
        <p>Соңғы сақталған есім: <strong>{state.savedName}</strong></p>
      )}
    </div>
  );
}

export default Names;
