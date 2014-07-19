var MainView = require('./views/main');
var domready = require('domready');

window.app = {
    init: function () {
        var app = this;

        domready(function () {
            app.view = new MainView({ el: document.body });
        });
    }
};

window.app.init();
