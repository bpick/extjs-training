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
    items: [{
        xtype: 'actionpane',
        itemId: 'actionpane',
        height: 850,
        margin: '0px 12px',
        flex: 3
    }, {
        xtype: 'descriptionpane',
        itemId: 'descriptionpane',
        height: 850,
        flex: 3
    }],
    getRenderPane: function() {
        return this.getComponent('actionpane').getComponent('renderpane');
    },
    getContentPane: function() {
        return this.getComponent('actionpane').getComponent('contentpane');
    },
    getDescriptionPane: function() {
        return this.getComponent('descriptionpane');
    }
});