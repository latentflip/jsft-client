var config = require('getconfig');
var templatizer = require('templatizer');

module.exports ={
    appPath: '/{client*}',
    moonboots: {
        main: __dirname + '/client/app.js',
        developmentMode: true,
        stylesheets: [
            __dirname + '/client/public/css/pure.css',
            __dirname + '/client/public/css/app.css'
        ],
        browserify: require('./package.json').browserify,

        beforeBuildJS: function () {
            if (config.isDev) {
                templatizer(__dirname + '/client/templates', __dirname + '/client/templates.js');
            }
        }
    },
};
