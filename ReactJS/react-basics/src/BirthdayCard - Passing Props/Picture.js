import React from 'react';

const Picture = function (props) {
    return (
        <div className="picture-container">
            { /* DONE 7: Rendered an image tag with its src attribute having value of the prop with name "pictureUrl" */}
            <img src={props.pictureUrl} />
        </div>
    )
}

export default Picture;