Ext.define('Training.store.ExtComponent', {
    extend: 'Ext.data.Store',

    alias: 'store.extcomponent',

    model: 'Training.model.ExtComponent',

    data: { items: [
        { name: 'Button', type: "button", config: {
            xtype: "lifecyclebtn",
            text: "training button"
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
