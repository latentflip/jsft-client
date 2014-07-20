var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');

window.app = {
    init: function () {
        var app = this;

        domready(function () {
            app.router = new Router();

            app.view = new MainView();
            document.body.appendChild(app.view.el);

            app.router.history.start({ pushState: true });
        });
    }
};

window.app.init();
