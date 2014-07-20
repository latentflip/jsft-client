var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../templates');
var dom = require('ampersand-dom');

module.exports = View.extend({
    template: templates.body,
    autoRender: true,
    events: {
        'click a[href]': 'handleLinkClick'
    },

    initialize: function () {
        var self = this;

        app.router.on('newPage', function (page) {
            self.page.set(page);
            self.updateActiveNav();
        });
    },

    render: function () {
        this.renderWithTemplate();
        this.page = new ViewSwitcher(this.getByRole('page'));
    },

    updateActiveNav: function () {
        this.getAll('nav a').forEach(function (aTag) {
            var parent = aTag.parentNode;

            if (window.location.pathname === aTag.pathname) {
                dom.addClass(parent, 'pure-menu-selected');
            } else {
                dom.removeClass(parent, 'pure-menu-selected');
            }
        });
    },

    handleLinkClick: function (e) {
        var aTag = e.target;

        if (e.metaKey || e.ctrlKey) return;

        if (aTag.host === window.location.host) {
            e.preventDefault();
            app.router.history.navigate(aTag.pathname, { trigger: true });
        }
    }
});
