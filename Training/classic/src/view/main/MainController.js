Ext.define('Training.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    control: {
        '*': {
            'writeLifeCycle': 'onWriteLifeCycle'
        }
    },
    /**
     * call select component function when user selects a component
     * 
     * @method onSelectComponent
     */
    onSelectComponent: function(combo, record, eOpts) {
        var me = this,
            lifecycle = me.lookup('lifecycle'),
            renderPane = lifecycle.getRenderPane(),
            contentPane = lifecycle.getContentPane();
        var config = record.get('config');

        renderPane.removeAll(true);

        var cmp = Ext.create(config);
        renderPane.add(cmp);
    },
    onWriteLifeCycle: function(className, fnName) {
        var me = this,
            lifecycle = me.lookup('lifecycle'),
            contentPane = lifecycle.getContentPane();


    }
});