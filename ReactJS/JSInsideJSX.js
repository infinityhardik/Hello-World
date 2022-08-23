import React from 'react';
import ReactDOM from 'react-dom';

// DONE 1: Created a variable 'firstname' and assigned my first name to it
const firstname = 'Hardik';
// DONE 2: Created a variable 'lastname' and assigned my last name to it
const lastname = 'Bhaavani';
// DONE 3: Created a variable 'numberOfIceCreams' and assigned a value for the number of ice-creams that I wish to eat right now
const numberOfIceCreams = 2;
// DONE 4: Created a variable 'iceCreamPrice' and assigned a value 20 to it.
const iceCreamPrice = 20;

ReactDOM.render(
    /* DONE 5: 
    Rendered a text within span tag that displays my full name and the total amount that I need to pay for desired number of ice-creams. This total amount is the product of numberOfIceCreams and iceCreamPrice.
    
    For instance, for the firstname as "Srishti", lastname as "Gupta" and numberOfIceCreams as 5, below text needs to be displayed:
    Hello Srishti Gupta! The total amount you need to pay for 5 ice-creams is Rs. 100.

    Here, 100 is calculated as the product of 20 and 5.
    
    Note that the above text format should be strictly followed.
  */
    <span>Hello {firstname + ' ' + lastname} ! The total amount you need to pay for {numberOfIceCreams} ice-creams is Rs. {numberOfIceCreams * iceCreamPrice}</span>,
    document.getElementById('root')
);


// To be added to App.js