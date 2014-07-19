var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');

module.exports = View.extend({
    template: '<body><div role="page"></div></body>',
    autoRender: true,

    render: function () {
        this.renderWithTemplate();
        this.page = new ViewSwitcher(this.getByRole('page'));
    }
});
