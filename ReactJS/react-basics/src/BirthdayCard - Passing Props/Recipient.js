import React from 'react';

const Recipient = function (props) {
    return (
        <div className="recipient-container">
            <span>To </span>
            <span>
                { /* DONE 6: Rendered value of prop with the name "recipientName" */}
                {props.recipientName}
            </span>
        </div>
    )
}

export default Recipient;