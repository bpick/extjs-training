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
        }, {
            xtype: 'button',
            reference: 'addbtn',
            disabled: true,
            text: 'Add',
            handler: 'onAddComponent'
        }, {
            xtype: 'button',
            reference: 'destroybtn',
            disabled: true,
            text: 'Destroy',
            handler: 'onDestroyComponent'
        }, {
            xtype: 'button',
            reference: 'destroybtn',
            disabled: true,
            text: 'AutoDestroy',
            handler: 'onAutoDestroyComponent'
        }]
    },
    add: function() {
        var me = this,
            parentNode = undefined,
            moreInfo = {};
            
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'Called from RenderPane'
        ]      
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
        this.callParent(arguments);
    },
    remove: function(component, autoDestroy) {
        var me = this,
            parentNode = undefined,
            moreInfo = {};
        debugger;
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        if(!superMethod) {
            superMethod = me.getSuperMethod('doDestroy', arguments.callee);
        }
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'Called from RenderPane'
        ]      
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
        this.callParent(arguments);
    },
    onBeforeAdd: function(items) {
        var me = this,
        parentNode = undefined,
        moreInfo = {};
        
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'Called from RenderPane'
        ]   
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
        this.callParent(arguments);
    },
    
    onAdded: function(item, pos) {
        var me = this,
        parentNode = undefined,
        moreInfo = {}, keeplogging;

        if(item.xtype != 'lifecyclebtn')
                keeplogging = false;

        if(!keeplogging) {
            return this.callParent(arguments);
        } else {
            
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            moreInfo.moreSteps = [
                'Called from RenderPane'
            ]   
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            return this.callParent(arguments); 
        }
       
    },
    
    resetLayout: function(layout, ownerContext, firstTime) {
        var me = this,
        parentNode = undefined,
        moreInfo = {};
        
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'Called from RenderPane'
        ]   
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
    },
    initAnimation: function() {
        var me = this,
        parentNode = undefined,
        moreInfo = {};
        
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'Called from RenderPane'
        ]   
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
    },
    invalidate: function(components, full) {
        var me = this,
        parentNode = undefined,
        moreInfo = {};
        
        var fnName = arguments.callee.$name;
        var superMethod = me.getSuperMethod(fnName, arguments.callee);
        moreInfo.fnContent = superMethod.toString();
        moreInfo.moreSteps = [
            'Called from RenderPane'
        ]   
        this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
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
    },
    privates: {
        prepareItems: function(items, applyDefaults) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            var keeplogging = true;
            Ext.Array.forEach(items, function(item) {
                if(item.xtype != 'lifecyclebtn')
                    keeplogging = false;
            });

            if(!keeplogging) {
                return this.callParent(arguments);
            } else {
                
                var fnName = arguments.callee.$name;
                var superMethod = me.getSuperMethod(fnName, arguments.callee);
                moreInfo.fnContent = superMethod.toString();
                moreInfo.moreSteps = [
                    'Called from RenderPane'
                ]   
                this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
                return this.callParent(arguments);
            }
            
        },
        onFocusableChildAdd: function(item) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            moreInfo.moreSteps = [
                'Called from RenderPane'
            ]   
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            this.callParent(arguments);
        },
        initDone: function(containerLayoutDone) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            moreInfo.moreSteps = [
                'Called from RenderPane'
            ]   
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            this.callParent(arguments);
        },
        updateLayout: function() {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            moreInfo.moreSteps = [
                'Called from RenderPane',
                'Pending layout',
                'queue queueInvalidate'
            ]   
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            this.callParent(arguments); 
        },
        doRemove: function(component, flags) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            
            var fnName = arguments.callee.$name;
            var superMethod = me.getSuperMethod(fnName, arguments.callee);
            moreInfo.fnContent = superMethod.toString();
            moreInfo.moreSteps = [
                'Called from RenderPane'
            ]   
            this.writeToLifeCycle(this.$className, arguments.callee.$name, parentNode, moreInfo);
            this.callParent(arguments);
        }
    },
    listeners: {
        beforeadd: function(button) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['CtEvent'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        },
        add: function(button) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['CtEvent'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        },
        beforeremove: function(container, component) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['CtEvent'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        },
        remove: function(container, component) {
            var me = this,
            parentNode = undefined,
            moreInfo = {};
            moreInfo.moreSteps = ['CtEvent'];
            me.writeToLifeCycle(this.$className, arguments.callee.name, parentNode, moreInfo);
        }


    }
});