import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import registerServiceWorker from './Phone Directory Application/registerServiceWorker';
import './Phone Directory Application/index.css';
import './Phone Directory Application/common/common.css';
import PhoneDirectory from './Phone Directory Application/PhoneDirectory';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PhoneDirectory />);
registerServiceWorker();

// Copy-Paste the Above Code onto the Index.js of the main React App and Comment other Codes to run this Project.