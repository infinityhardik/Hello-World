import React from 'react';

const NumberCard = function (props) {
    return (
        <div id={props.id} className="card-container" style={{ color: props.color }} onClick={props.cardClickHandler}>
            <span>
                {
                    /* DONE 3:
                      Rendered the value of prop "number" as created in the above DONE 2
                    */
                }
                {props.number}
            </span>
        </div>
    )
}

export default NumberCard;