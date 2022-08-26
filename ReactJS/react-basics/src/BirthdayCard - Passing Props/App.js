import React from 'react';

import HappyBirthdayCard from './HappyBirthdayCard.js';

const App = function () {
    /* DONE 1: Sent props with the following names inside HappyBirthdayCard component
        a) recipientName="WriteRecipientName"
        b) pictureUrl="GivePictureImageUrlFromWeb"
        c) birthdayWishes="WritePersonalizedMessage"
        d) senderName="WriteYourName"
        
        One example can be:
        recipientName="Dad" 
        pictureUrl="https://quotespics.net/wp-content/uploads/2016/08/birthday-cake-with-many-candles-wallpaper-4.jpg" 
        birthdayWishes="I'm grateful for all that you've done for me to make me what I am today!" 
        senderName="Your Daughter"
    */
    return (
        <HappyBirthdayCard
            recipientName="Dad"
            pictureUrl="https://quotespics.net/wp-content/uploads/2016/08/birthday-cake-with-many-candles-wallpaper-4.jpg"
            birthdayWishes="I'm grateful for all that you've done for me to make me what I am today!"
            senderName="Your Daughter"
        />
    )
}

export default App;