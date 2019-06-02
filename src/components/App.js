import React, { useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import Context from '../context';
import PublishedMessage from './PublishedMessage';
import MessageBoard from './MessageBoard';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <h2>Reaction</h2>
      <hr />
      <PublishedMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
