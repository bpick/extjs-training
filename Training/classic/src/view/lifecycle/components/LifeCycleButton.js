Ext.define('Training.view.lifecycle.components.LifeCycleButton', {
    extend: 'Ext.button.Button',
    xtype: 'lifecyclebtn',
    text: 'LifeCycle Button',
    requires: [
    ],
    constructor: function(config) {
        var me = this;
        config = config || {},
        parentNode = undefined,
        moreInfo = {};
        var fnName = arguments.callee.$name;
        moreInfo.fnContent = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.moreSteps = [
            'generate new id & getId()',
            'create protoEl',
            'initConfig',
            'apply scrollable (optional)',
            'setupProtoEl: Ext.util.ProtoElement',
            'initComponent',
            'register component to Manager',
            'construct mixin Ext.state.Stateful',
            'add state event resize',
            'get controller and init controller (optional)',
            'setup plugins (optional)',
            'disabled apply (optional)',
            'renderTo apply (optional)',
            'call show function (optional)',
            'apply disabledCls',
            'apply BaseAction.addComponent'
        ]
        this.writeToLifeCycle(this.$className, fnName, parentNode, moreInfo);
        this.writeIdLifeCycle();
        this.writeProtoElLifeCycle();
        this.callParent([config]);
    },
     initConfig: function(config) {
        var me = this,
            parentNode = "constructor",
            moreInfo = {};
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'call configure function: cfg.configure(me, instanceConfig)'
        ]       
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
        
        this.callParent([config]);

        this.writeScrollable();
        this.writeElCtMixin();
    }, 
    initComponent: function() {
        var me = this,
            parentNode = "constructor",
            moreInfo = {};
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'add x-unselectable',
            'setup menu if any',
            'setup href if url is defined',
            'configuredWithPreventDefault if preventDefault is active',
            'setup toggleGroup (optional)',
            'setup text if html is defined but text is not'
        ]
        me.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
        me.callParent();

        // add some information to lifecycle
        me.writeRegisterLifeCycle();
        me.writeStateMixin();
        me.writeAddStateEvent();
        me.writeInitControllerEvent();
        me.writeInitPluginsEvent();
        me.writeSetDisabledEvent();
        me.writeRenderToEvent();
        me.writeDisabledClsEvent();
        me.writeBaseActionEvent();
    },
    writeIdLifeCycle: function() {
        var moreInfo = {};
        moreInfo.moreSteps = ['Example: button-1017'];
        this.writeCommonFn('GenerateId', moreInfo, 'constructor');
    },
    writeProtoElLifeCycle: function() {
        var moreInfo = {};
        moreInfo.moreSteps = ['Example: button-1017'];
        this.writeCommonFn('new ProtoEl', undefined, 'constructor');
    },
    writeScrollable: function() {
        var moreInfo = {};
        moreInfo.moreSteps = [
            'Manages certain element-like data prior to rendering. These values are passed on to the render process. This is currently used to manage the "class" and "style" attributes of a component\'s primary el as well as the bodyEl of panels. This allows things like addBodyCls in Panel to share logic with addCls in Component.',
            'Reference: http://docs.sencha.com/extjs/6.5.3/classic/Ext.util.ProtoElement.html#property-clsProp'
        ]
        this.writeCommonFn('setup Scrollable', undefined, 'constructor');
    },
    writeElCtMixin: function() {
        var moreInfo = {};
        moreInfo.moreSteps = ['No data found'];
        this.writeCommonFn('mixins.elementCt', undefined, 'constructor');
    },
    writeStateMixin: function() {
        var moreInfo = {};
        moreInfo.moreSteps = ['No data found'];
        this.writeCommonFn('mixins.state', undefined, 'constructor');
    },
    writeAddStateEvent: function() {
        this.writeCommonFn("add state event 'resize'", undefined, 'constructor');
    },
    writeInitControllerEvent: function() {
        this.writeCommonFn("controller.init (optional)", undefined, 'constructor');
    },
    writeInitPluginsEvent: function() {
        this.writeCommonFn("initPlugin (optional)", undefined, 'constructor');
    },
    writeSetDisabledEvent: function() {
        this.writeCommonFn("setDisabled (optional)", undefined, 'constructor');
    },
    writeRenderToEvent: function() {
        this.writeCommonFn("renderTo (optional)", undefined, 'constructor');
    },
    writeDisabledClsEvent: function() {
        this.writeCommonFn("apply disabledCls (optional)", undefined, 'constructor');
    },
    writeBaseActionEvent: function() {
        this.writeCommonFn("apply BaseAction (optional)", undefined, 'constructor');
    },
    writeSetUI: function() {
        this.writeCommonFn("setUI");
    },
    writeAddPressedCls: function() {
        this.writeCommonFn("addCls(pressed)");
    },
    writeVisibleItem: function() {
        this.writeCommonFn("Set visibility mode");
    },
    writeOverClsItem: function() {
        this.writeCommonFn("Set overCls");
    },
    writeHideItem: function() {
        this.writeCommonFn("Set hide item");
    },
    writeCommonFn: function(fn, moreInfo, parentNode) {
        var me = this,
        moreInfo = moreInfo || {};
        // add some information to lifecycle
        me.writeToLifeCycle(this.$className, fn, parentNode, moreInfo);
    },
    writeRegisterLifeCycle: function() {
        var me = this,
        parentNode = "constructor",
        moreInfo = {};
        moreInfo.fnContent = me.getFnContent(arguments.callee);
        // add some information to lifecycle
        me.writeToLifeCycle(this.$className, 'Ext.ComponentManager.register', parentNode, moreInfo);
    },
    onAdded: function(container, pos, instanced) {
        var me = this,
            parentNode = undefined,
            moreInfo = {};
            
        
        
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'Method to manage awareness of when components are added to their respective Container, firing an #added event',
            'References are established at add time rather than at render time.',
            'Allows addition of behavior when a Component is added to a Container\'s collection of child items',
            'After calling the superclass\'s `onAdded`, the `ownerCt` reference will be present, and if configured with a ref, the `refOwner` will be set.'
        ]       
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
        this.callParent(arguments);
    },
    render: function(container, position) {
        var me = this,
            parentNode = undefined,
            moreInfo = {};
            
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'Component. Eg: lifecyclebtn'
        ]
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
        this.callParent(arguments);
    },
    
    afterRender: function() {
        var me = this,
        parentNode = undefined,
        moreInfo = {};
    var fnName = arguments.callee.$name;
    var superMethod = me.getSuperMethod(fnName, arguments.callee);
    moreInfo.fnContent = superMethod.toString();
    this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
    this.callParent(arguments);
    },
    
    getElConfig: function() {
        var me = this,
            parentNode = undefined,
            moreInfo = {};
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'Component. Eg: lifecyclebtn'
        ]
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
        return this.callParent(arguments);
    },
    destroy: function() {
        var me = this,
        parentNode = undefined,
        moreInfo = {};
        debugger;
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);


        var inFunc = superMethod.toString();
        var rExp   = /^function ([^\s]+) \(\)/;
        var fName = inFunc.match(rExp);

        if(!fName) {
            superMethod = me.getSuperMethod(superMethod.$name, superMethod);
        }
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'DoDestroy function with following steps',
            'Remove binding removeBindings()',
            'Destroy bindable with following steps',
            'Destroy viewmodel viewModel.destroy();',
            'Destroy session session.destroy()',
            'Destroy controller controller.destroy()',
            'OwnerCt remove component',
            'clearListeners: We need to defer clearing listeners until after doDestroy() completes,',
            'to let the interested parties fire events until the very end.'
        ]
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
        return this.callParent(arguments);
    },
    
    listeners: {
        
        added: function(button) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['Event'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);

            
        },
        beforeactivate: function(button) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['Event'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        },
        activate: function(button) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['Event'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode);
        },
        beforerender: function(button, eOpts) {
            
            var me = this,
            parentNode = undefined, moreInfo = {};
            moreInfo.moreSteps = [
                'Event'
            ]
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        },
        render: function(button, eOpts) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['Event'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        },
        afterrender: function(button, eOpts) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['Event'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        },
        beforeshow: function(button) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['Event'];
            me.writeToLifeCycle(this.$className, arguments.callee.$ame, parentNode, moreInfo);
        },
        show: function(button) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['Event'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        },
        beforedestroy: function(button) {
            var me = this,
            parentNode = 'destroy',
            moreInfo = {};
            moreInfo.moreSteps = ['Event'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        },
        destroy: function(button) {
            var me = this,
            parentNode = 'destroy',
            moreInfo = {};
            moreInfo.moreSteps = [
                'Event',
                'After call destroy event. Unregister Ext.ComponentManager.unregister(me);',
                'Destroy mixins state as me.mixins.state.destroy.call(me);',
                'Destroy comp.el',
                'Destroy mixins elementCt as me.mixins.elementCt.destroy.call(me);',
                'Update rendered is false'
            ];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        }

    },
    privates: {
        setupProtoEl: function () {
            var me = this,
                parentNode = "constructor",
                moreInfo = {};
            moreInfo.moreSteps = [
                'protoEl addCls (optional)',
                'protoEl setStyle (optional)'
            ];
            var superMethod = me.getSuperMethod(arguments.callee.$name);
                moreInfo.fnContent = superMethod.toString();
                this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
                this.callParent(arguments);
        },
        finishRender: function(containerIdx) {
            var me = this,
                parentNode = undefined,
                moreInfo = {};
                
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            moreInfo.moreSteps = [
                'render Event will fire',
                'afterrender Event will fire'
            ];
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);

            this.writeVisibleItem();
            this.callParent(arguments);
        },
        initOverflow: function() {
            var me = this,
                parentNode = undefined,
                moreInfo = {};
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            moreInfo.moreSteps = [
                'Component. Eg: lifecyclebtn'
            ]
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            this.callParent(arguments);

            // set ui
            //this.writeSetUI();
            // add class pressed
            //this.writeAddPressedCls();
        },
        
        onRender: function() {
            var me = this,
                parentNode = undefined,
                moreInfo = {};
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();

            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            this.callParent(arguments);
        },
        initEvents: function() {
            var me = this,
                parentNode = undefined,
                moreInfo = {};
                
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            this.callParent(arguments);

            this.writeHideItem();
        },
        initKeyMap: function() {
            var me = this,
                parentNode = undefined,
                moreInfo = {};
                
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            this.callParent(arguments);
        },
        wrapPrimaryEl: function(el) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
              
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
    
        this.callParent(arguments);
        },
        cacheRefEls: function(el) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
              
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
    
        this.callParent(arguments);
        },
        removeBindings: function() {
            var me = this,
            parentNode = 'destroy',
            moreInfo = {};
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            if(!superMethod) {
                superMethod = me.getSuperMethod('doDestroy', arguments.callee);
            }
            moreInfo.fnContent = superMethod.toString();
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            return this.callParent(arguments);
        },
        destroyBindable: function() {
            var me = this,
            parentNode = 'destroy',
            moreInfo = {};
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            return this.callParent(arguments);
        },
        stopAnimation: function() {
            var me = this,
            parentNode = 'destroy',
            moreInfo = {};
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            moreInfo.moreSteps = [
                'After this step, any ancillary components are destroyed with Ext.destroy(me.loadMask, me.dd, me.resizer, me.proxy, me.proxyWrap, me.resizerComponent, me.scrollable, me.contentEl)',
                'Destroying the floatingItems ZIndexManager will also destroy descendant floating Components with Ext.destroy(me.componentLayout, me.loadMask, me.floatingDescendants);',
                'destroy all plugins with Ext.destroy(me.plugins);',
                'cancel layout Ext.Component.cancelLayout(me, true)'
            ]
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            return this.callParent(arguments);
        }
    },
    getFnContent: function(callee) {
        return callee.arguments.callee.toString();
    },
    getSuperMethod: function (fnName, callee) {
        var method,
            superMethod = (method = this.callParent.caller || callee)
                && (method.$previous || ((method = method.$owner ? method : method.caller) && method.$owner.superclass[fnName]));
        return superMethod;
    },
    writeToLifeCycle: function(className, fnName, parentNode, moreInfo) {
        var mainView = Training.app.getMainView();
        //mainView.fireEvent('writeLifeCycle', this.$className, arguments.callee.$name);
        mainView.fireEvent('writeLifeCycle', className, fnName, parentNode, moreInfo);
    }
});