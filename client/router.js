var Router = require('ampersand-router');
var HowlsPage = require('./pages/howls');

function triggerPage(PageConstructor) {
    return function (params) {
        this.trigger('newPage', new PageConstructor());
    };
}

module.exports = Router.extend({
    routes: {
        '': 'howls',
        'howls': 'howls',
        'wolves': 'wolves',
        'marks': 'marks',
        '*default': '404'
    },

    howls: triggerPage(HowlsPage),
    wolves: console.log.bind(console, 'wolves'),
    marks: console.log.bind(console, 'marks'),
    '404': console.log.bind(console, '404'),
});
