var config = require('getconfig');
var templatizer = require('templatizer');
var stylizer = require('stylizer');

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
            if (!config.isDev) return;
            templatizer(__dirname + '/client/templates', __dirname + '/client/templates.js');
        },

        beforeBuildCSS: function (done) {
            if (!config.isDev) return done();

            stylizer({
                infile: __dirname + '/client/public/css/app.styl',
                outfile: __dirname + '/client/public/css/app.css',
                development: config.isDev,
                watch: __dirname + '/client/public/css/**/*.styl'
            }, done);
        }
    },
};
