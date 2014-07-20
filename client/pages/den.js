var BasePage = require('./base');
var templates = require('../templates');
var Howls = require('../models/howls');
var HowlView = require('../views/howl');

module.exports = BasePage.extend({
    template: templates.pages.den,
    autoRender: true,

    initialize: function () {
        this.collection = new Howls();
        this.collection.fetch();
    },

    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, HowlView, this.getByRole('howls'));
        return this;
    }
});
