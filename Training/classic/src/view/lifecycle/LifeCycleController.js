Ext.define('Training.view.lifecycle.LifeCycleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.lifecycle',
    /**
     * call select component function when user selects a component
     * 
     * @method onSelectComponent
     */
    onSelectComponent: function(combo, record, eOpts) {
        var me = this,
            _view = me.getView(),
            renderPane = _view.getRenderPane();
        var config = record.get('config');

        var cmp = Ext.create(config);

        renderPane.removeAll(true);
        debugger;
        renderPane.add(cmp);
    }
});