var hapi = require('hapi');
var server = hapi.createServer(8080, 'localhost');
var moonboots = require('moonboots_hapi');

server.pack.register({
    plugin: moonboots,
    options: require('./moonboots-config.js')
}, function () {
    server.start(function () {
        console.log(server.info.uri);
    });
});
