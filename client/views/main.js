var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.body,
    autoRender: true,

    render: function () {
        this.renderWithTemplate();
        this.page = new ViewSwitcher(this.getByRole('page'));
    }
});
