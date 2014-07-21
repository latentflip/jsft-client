var Router = require('ampersand-router');
var HowlsPage = require('./pages/howls');
var WolvesPage = require('./pages/wolves');
var DenPage = require('./pages/den');
var MarksPage = require('./pages/marks');
var FourOhFourPage = require('./pages/four-oh-four');
var querystring = require('querystring');

function triggerPage(PageConstructor) {
    return function (params) {
        this.trigger('newPage', new PageConstructor());
    };
}

module.exports = Router.extend({
    routes: {
        '': 'den',
        'howls': 'howls',
        'wolves': 'wolves',
        'marks': 'marks',
        'auth/login': 'login',
        'auth/logout': 'logout',
        'auth/callback': 'authCallback',
        '*default': '404'
    },

    login: function () {
        if (!app.me.loggedIn) {
            var authURL = window.location.origin + '/auth/callback';
            window.location = 'http://wolves.technology/authorize?redirect_uri=' + encodeURIComponent(authURL);
        } else {
            this.redirectTo('/');
        }
    },

    logout: function () {
        app.me.accessToken = null;
        this.redirectTo('/');
    },

    authCallback: function () {
        var hashParams = querystring.parse(window.location.hash.substr(1));
        app.me.accessToken = hashParams.access_token;
        this.redirectTo('/');

    },

    den: triggerPage(DenPage),
    howls: triggerPage(HowlsPage),
    marks: triggerPage(MarksPage),
    wolves: triggerPage(WolvesPage),
    '404': triggerPage(FourOhFourPage)
});
