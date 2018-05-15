Ext.define('Training.store.ExtComponent', {
    extend: 'Ext.data.Store',

    alias: 'store.extcomponent',

    model: 'Training.model.ExtComponent',

    data: { items: [
        { name: 'Button', type: "button", config: {
            xtype: "lifecyclebtn",
            text: "training button"
        }},
        { name: 'Component',     type: "component", config: {
            xtype: "component",
            html: "training component"
        }}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
