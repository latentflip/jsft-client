var BasePage = require('./base');
var templates = require('../templates');

module.exports = BasePage.extend({
    template: templates.pages.marks,
    autoRender: true
});
