var Model = require('ampersand-model');

module.exports = Model.extend({
    initialize: function (attrs) {
        var self;
        if (localStorage.wolvesAccessToken) {
            this.accessToken = localStorage.wolvesAccessToken;
        }

        this.on('change:accessToken', function (model, token) {
            if (!token) {
                delete localStorage.wolvesAccessToken;
            } else {
                localStorage.wolvesAccessToken = token;
            }
        });
    },
    session: {
        accessToken: 'string'
    },
    derived: {
        loggedIn: {
            deps: ['accessToken'],
            fn: function () {
                return !!this.accessToken;
            }
        }
    }
});
