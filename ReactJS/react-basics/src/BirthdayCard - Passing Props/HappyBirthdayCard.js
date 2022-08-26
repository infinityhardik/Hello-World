import React from 'react';

import Recipient from './Recipient.js';
import Picture from './Picture.js';
import Message from './Message.js';
import Sender from './Sender.js';

const HappyBirthdayCard = function (props) {
    return (
        <div className="main-container">
            { /* DONE 2: Catched prop with the name "recipientName" and passed it down to Recipient component */}
            <Recipient recipientName={props.recipientName} />
            { /* DONE 3: Catched prop with the name "pictureUrl" and passed it down to Picture component */}
            <Picture pictureUrl={props.pictureUrl} />
            { /* DONE 4: Catched prop with the name "birthdayWishes" and passed it down to Message component */}
            <Message birthdayWishes={props.birthdayWishes} />
            { /* DONE 5: Catched prop with the name "senderName" and passed it down to Sender component */}
            <Sender senderName={props.senderName} />
        </div>
    )
}

export default HappyBirthdayCard;