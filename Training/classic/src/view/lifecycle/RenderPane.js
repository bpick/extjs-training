Ext.define('Training.view.lifecycle.RenderPane', {
    extend: 'Ext.panel.Panel',
    xtype: 'renderpane',
    title: 'Render Pane',
    layout: 'center',
    tbar: {
        items: [{
            xtype: 'combobox',
            displayField: 'name',
            valueField: 'type',
            queryMode: 'local',
            emptyText: 'Select component',
            typeAhead: true,
            store: {
                type: 'extcomponent'
            },
            listeners: {
                select: 'onSelectComponent'
            }
        }]
    }

});