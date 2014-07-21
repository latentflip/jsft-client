var Model = require('ampersand-model');

module.exports = Model.extend({
    url: 'http://wolves.technology/wolves/me',
    ajaxConfig: function () {
        return {
            headers: {
                'Auth-Token': (this.accessToken ? this.accessToken : '')
            }
        };
    },
    initialize: function (attrs) {
        var self = this;
        if (localStorage.wolvesAccessToken) {
            this.accessToken = localStorage.wolvesAccessToken;
            this.fetch();
        }

        this.on('change:accessToken', function (model, token) {
            if (!token) {
                delete localStorage.wolvesAccessToken;
            } else {
                localStorage.wolvesAccessToken = token;
                self.fetch();
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
