import React from 'react';
import ReactDOM from 'react-dom';

/* DONE 3: 
  Wrote a ReactDOM.render() method.
  a) Using this method, rendered a span tag with the following text:
  1. Is React a JavaScript library for building user-interfaces?
  b) Using this method, rendered the span tag created above inside the div tag with id "question1" on DOM.

  Note that point a describes WHAT to render and point b describes WHERE to render.
*/
ReactDOM.render(
  <span>1. Is React a JavaScript library for building user-interfaces?</span>,
  document.getElementById("question1")
);

/* DONE 4: 
  Wrote a ReactDOM.render() method.
  a) Using this method, created a form with class as "options". Inside this form tag, created two radio type inputs - one with value "Yes" and the other with value "No".
  b) Using this method, rendered the form tag created above inside the div tag with class "options-main-container" on DOM.

  Note that point a describes WHAT to render and point b describes WHERE to render.
*/
ReactDOM.render(
  <form className="options">
    <input type="radio" name="question1" value="Yes" />Yes<br />
    <input type="radio" name="question1" value="No" />No
  </form>,
  document.getElementsByClassName("options-main-container")[0]
);


/* The HTML Code for React Rendering :-
<body>
    <div id="root">
        <!-- DONE 1: Created a div tag with id "question1". -->
        <div id="question1">
        </div>

        <!-- DONE 2: Below the above div, created another div with class "options-main-container". -->
        <div class="options-main-container">
        </div>
    </div>

    <!-- React, ReactDOM and App.js configured here -->
    <script src="./config.js"></script>
</body>
*/

// To be added to App.js