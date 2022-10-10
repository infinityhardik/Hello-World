const express = require('express');
/*Import router object from router.js file */
const router = require('./router');

const app = express();
const port = 3000;

/*Use middleware to include router object in app */
app.use(router);

app.listen(port, () => {
    console.log('Server listening at port -> '+ port);
});

module.exports = app;