const events = require('events');
class MusicPlayer extends events { };

const musicPlayer = new MusicPlayer();

musicPlayer.on('play', function (track) {
    console.log('Playing song ' + track);
});

musicPlayer.on('stop', () => console.log('Music stopped'));

function play(track) {
    musicPlayer.emit('play', track);
}

function stop() {
    musicPlayer.emit('stop');
}

play('Hello');
stop();

module.exports = { play, stop };


