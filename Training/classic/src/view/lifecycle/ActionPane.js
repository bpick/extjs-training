Ext.define('Training.view.lifecycle.ActionPane', {
    extend: 'Ext.container.Container',
    xtype: 'actionpane',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        frame: true
    },

    items: [{
        xtype: 'renderpane',
        itemId: 'renderpane',
        height: 500,
        margin: '0px 0px 20px 0px'
    }, {
        xtype: 'descriptionpane',
        itemId: 'descriptionpane',
        minHeight: 400,
        flex: 1
    }]

});