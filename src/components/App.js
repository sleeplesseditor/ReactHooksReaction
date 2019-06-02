import React, { useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import { newMessage } from '../state/actions';
import PublishedMessage from './PublishedMessage';
import MessageBoard from './MessageBoard';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h2>Reaction</h2>
      <hr />
      <PublishedMessage dispatch={dispatch} />
      <hr />
      <MessageBoard messages={state.messages} />
    </div>
  );
}

export default App;
