import React, { useState } from 'react';
import { useAppContext } from './Hooks';
import { newMessage } from '../state/actions';

function PublishedMessage() {
    const { pubsub: { publish } } = useAppContext();
    const [text, setText] = useState('');

    const updateText = event => {
        setText(event.target.value);
    }

    const publishMessage = () => {
        publish(newMessage(text));
    }

    const handleKeyPress = event => {
        if(event.key === 'Enter') publishMessage();
    }

    return (
        <div>
            <h3>Got Something to Say?</h3>
            <input 
                value={text} 
                onChange={updateText}
                onKeyPress={handleKeyPress}
            />
            {' '}
            <button onClick={publishMessage}>Publish It!</button>
        </div>
    )
}

export default PublishedMessage;
