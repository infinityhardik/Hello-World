import React from 'react';

const Sender = function (props) {
    return (
        <div className="sender-container">
            <span>
                { /* DONE 9: Rendered value of prop with the name "senderName" */}
                {props.senderName}
            </span>
        </div>
    )
}

export default Sender;