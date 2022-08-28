import React from 'react';

const DirectoryRow = function (props) {
    return (
        <div className="card">
            <span>{props.directory.name}</span>
        </div>
    )
}

export default DirectoryRow;