Ext.define('Training.view.lifecycle.LifeCycle', {
    extend: 'Ext.container.Container',
    alias: 'widget.lifecycle',
    requires: [
        'Ext.layout.HBoxLayout'
    ],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    controller: 'lifecycle',
    items: [{
        xtype: 'renderpane',
        itemId: 'renderpane',
        margin: '0px 12px',
        flex: 2
    }, {
        xtype: 'contentpane',
        itemId: 'contentpane',
        flex: 1
    }],
    getRenderPane: function() {
        return this.getComponent('renderpane');
    },
    getContentPane: function() {
        return this.getComponent('contentpane');
    }
});