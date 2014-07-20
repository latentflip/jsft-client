var BasePage = require('./base');
var templates = require('../templates');
var Wolves = require('../models/wolves');
var WolfView = require('../views/wolf');

module.exports = BasePage.extend({
    template: templates.pages.wolves,
    autoRender: true,

    initialize: function () {
        this.collection = new Wolves();
        this.collection.fetch();
    },

    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, WolfView, this.getByRole('wolves'));
        return this;
    }
});
