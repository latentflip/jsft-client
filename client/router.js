var Router = require('ampersand-router');
var HowlsPage = require('./pages/howls');
var WolvesPage = require('./pages/wolves');
var DenPage = require('./pages/den');
var MarksPage = require('./pages/marks');
var FourOhFourPage = require('./pages/four-oh-four');

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
        '*default': '404'
    },

    den: triggerPage(DenPage),
    howls: triggerPage(HowlsPage),
    marks: triggerPage(MarksPage),
    wolves: triggerPage(WolvesPage),
    '404': triggerPage(FourOhFourPage)
});
