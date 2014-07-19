var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');

window.app = {
    init: function () {
        var app = this;

        domready(function () {
            app.view = new MainView({ el: document.body });
            app.router = new Router();

            app.router.on('newPage', function (page) {
                app.view.page.set(page);
            });

            app.router.history.start({ pushState: true });
        });
    }
};

window.app.init();
