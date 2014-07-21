var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');
var Me = require('./models/me');

window.app = {
    init: function () {
        var app = this;

        domready(function () {
            app.me = new Me();

            app.router = new Router();

            app.view = new MainView();

            document.body.appendChild(app.view.el);

            app.router.history.start({ pushState: true });
        });
    }
};

window.app.init();
