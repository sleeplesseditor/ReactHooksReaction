import PubNub from 'pubnub';
import pubNubConfig from './pubNub.config.json';

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

export function PubSub(){
    const pubNub = new PubNub(pubNubConfig);

    pubNub.subscribe({ channels: [MESSAGE_CHANNEL] });

    this.addListener = listenerConfig => {
        pubNub.addListener(listenerConfig);
    }

    this.publish = message => {
        console.log('publish message', message);
        pubNub.publish({
            message,
            channel: MESSAGE_CHANNEL
        })
    }
}