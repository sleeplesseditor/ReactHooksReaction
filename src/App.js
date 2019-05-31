import React, { useReducer } from 'react';
import reducer, { initialState } from './state/reducer';
import { newMessage } from './state/actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h2>Reaction</h2>
    </div>
  );
}

export default App;
