// Stream used to Load Data in chunks > Useful when data is too big to load all at once. 
// Example > Some Data to be displayed contains 100,000 lines of Text, 
// we should not download the entire file once and then display the data. 
// Rather it is faster to read data in small chunks
// Same works for Youtube as data is loaded in chunks.
const { createReadStream } = require('fs');

// By Default 64kb Chunk Size
const stream = createReadStream('./scripts/staticWebApp.html', { highWaterMark:2 })
// HighWaterMark sets the Size of Chunk
// Add  {encoding:'utf-8'} to specify Encoding method for stream

stream.on('data', (result) => {
    console.log(result);
})
