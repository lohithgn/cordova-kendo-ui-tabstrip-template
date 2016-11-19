(function (global) {
    'use strict';
    var app = global.app = global.app || {};
    app.Contacts = {
        title: 'Contacts',
        ds: new kendo.data.DataSource({
            data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
        }),
        alert: function (e) {
            alert(e.data.name);
        }
    }
})(window);