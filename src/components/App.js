import React, { useEffect, useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import Context from '../context';
import { PubSub } from '../pubsub';
import PublishedMessage from './PublishedMessage';
import MessageBoard from './MessageBoard';

const pubsub = new PubSub();

setTimeout(() => {
  pubsub.publish({
    type: 'foo',
    value: 'bar'
  })
}, 1000);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject;
    
        console.log ('channel', channel, 'message', message);
    
        dispatch(message);
      }
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <hr />
      <PublishedMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
