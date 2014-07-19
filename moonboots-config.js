module.exports ={
    appPath: '/{client*}',
    moonboots: {
        main: __dirname + '/client/app.js',
        developmentMode: true,
        stylesheets: [
            __dirname + '/client/public/css/pure.css',
            __dirname + '/client/public/css/app.css'
        ]
    },
};
