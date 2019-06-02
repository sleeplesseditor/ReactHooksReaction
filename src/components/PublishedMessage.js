import React, { useState } from 'react';
import { newMessage } from '../state/actions';

function PublishedMessage(props) {
    const { dispatch } = props;

    const [text, setText] = useState('');

    const updateText = event => {
        setText(event.target.value);
    }

    const publishMessage = () => {
        dispatch(newMessage(text));
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
