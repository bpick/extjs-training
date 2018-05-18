Ext.define('Training.view.lifecycle.components.LifeCycleButton', {
    extend: 'Ext.button.Button',
    xtype: 'lifecyclebtn',
    text: 'LifeCycle Button',
    // 1. call constructor
    // 2. generate new id
    // 3. initConfig()
    // 4. setup protoEl: setup layout, initCls, cls (optional),style (optional)
    // 5. initComponent -> higher component initComponent ...
    // 5.1 construct plugins
    // 5.2 setSize
    // 5.3 initialize listeners
    // 5.4 initFocusable
    // 6. register to Ext.ComponentManager
    // 7. base mixin constructor are called
    // 8. add state event resizable
    // 9. container add item function call, fire add event if any for ct, generateMarkup....
    // 9.1 call onAdded function to setup ownerCt, fire added event for item

    constructor: function(config) {
        config = config || {};
        var mainView = Training.app.getMainView();
        debugger;
        mainView.fireEvent('writeLifeCycle', this.$className, arguments.callee.$name);
        this.callParent([config]);
    },
    initComponent: function() {
        var me = this;
        debugger;
        me.callParent();
    },
    listeners: {
        beforerender: function(button, eOpts) {
            debugger;
        },
        render: function(button, eOpts) {
            debugger;
        }
    }
});