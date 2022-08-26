import React from 'react';

const Message = function (props) {
    return (
        <div className="message-container">
            <span>
                { /* DONE 8: Rendered value of prop with the name "birthdayWishes" */}
                {props.birthdayWishes}
            </span>
        </div>
    )
}

export default Message;