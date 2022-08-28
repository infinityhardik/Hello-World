import React from 'react';

import DirectoryBrowser from './DirectoryBrowser.js';

window.state = {
    directories: []
};

const App = function () {
    return (
        <div className="main-container">
            <DirectoryBrowser />
        </div>
    )
}

export default App;
