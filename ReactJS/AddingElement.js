import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  // DONE 1: Removed heading tag with text "Hello World"
  // DONE 2: Rendered a textbox (in place of heading tag) with type text and placeholder "Your Name"
  <input type="text" placeholder="Your Name" />,
  document.getElementById('root')
);

// To be added to App.js