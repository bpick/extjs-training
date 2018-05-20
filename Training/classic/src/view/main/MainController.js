Ext.define('Training.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
        'Ext.d3.hierarchy.tree.HorizontalTree',
        'Ext.data.NodeInterface'
    ],
    control: {
        '*': {
            'writeLifeCycle': 'onWriteLifeCycle',
            'd3NodeSelect': 'onD3NodeSelect'
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
            contentPane = lifecycle.getContentPane(),
            addBtn = me.lookup('addbtn');
        var config = record.get('config');

        renderPane.removeAll(true);
        // start to create a component
        // create d3Tree
        var createTree = me.createD3Tree('Create Component');
        contentPane.add({
            xtype: 'panel',
            padding: 5,
            title: 'Create',
            layout: 'fit',
            items: [createTree]
        })
        contentPane.setActiveTree(createTree);
        var cmp = Ext.create(config);

        me.addCmp = cmp;
        addBtn.setDisabled(false);
    },
    onAddComponent: function() {
        var me = this,
            lifecycle = me.lookup('lifecycle'),
            renderPane = lifecycle.getRenderPane(),
            contentPane = lifecycle.getContentPane(),
            destroyBtn = me.lookup('destroybtn')
            cmp = me.addCmp;

        renderPane.removeAll(true);
        // create d3Tree
        var addTree = me.createD3Tree('Container add children');
        var pane = contentPane.add({
            xtype: 'panel',
            padding: 5,
            title: 'Add',
            layout: 'fit',
            items: [addTree]
        });
        contentPane.setActiveTree(addTree);
        contentPane.setActiveItem(pane);
        // start to add component into container
        renderPane.add(cmp);
        destroyBtn.setDisabled(false);
    },
    onDestroyComponent: function() {
        var me = this,
            lifecycle = me.lookup('lifecycle'),
            renderPane = lifecycle.getRenderPane(),
            contentPane = lifecycle.getContentPane(),
            cmp = me.addCmp;
        
        // create d3Tree
        var destroyTree = me.createD3Tree('Container remove children');
        var pane = contentPane.add({
            xtype: 'panel',
            padding: 5,
            title: 'Destroy',
            layout: 'fit',
            items: [destroyTree]
        });
        contentPane.setActiveTree(destroyTree);
        contentPane.setActiveItem(pane);
        // start to add component into container
        renderPane.remove(cmp, true);
    },
    onAutoDestroyComponent: function() {
        var me = this,
            lifecycle = me.lookup('lifecycle'),
            renderPane = lifecycle.getRenderPane(),
            contentPane = lifecycle.getContentPane(),
            cmp = me.addCmp;
        
        // create d3Tree
        var autoDestroyTree = me.createD3Tree('Component Destroy');
        var pane = contentPane.add({
            xtype: 'panel',
            padding: 5,
            title: 'AutoDestroy',
            layout: 'fit',
            items: [autoDestroyTree]
        });
        contentPane.setActiveTree(autoDestroyTree);
        contentPane.setActiveItem(pane);
        // start to add component into container
        debugger;
        cmp.destroy(true);
    },
    onWriteLifeCycle: function(className, fnName, parentNode, moreInfo) {
        var me = this,
            lifecycle = me.lookup('lifecycle'),
            contentPane = lifecycle.getContentPane(),
            activeTree = contentPane.getActiveTree(),
            treeStore = activeTree.getStore();
        
        var parent = !parentNode ? treeStore.getRoot() : treeStore.findNode('name', parentNode);

        var node = Ext.create('Ext.data.TreeModel', {
            className: className,
            name: fnName,
            moreInfo: moreInfo || {},
            expanded: true
        });
        parent.appendChild(node);


    },
    createD3Tree: function(root) {
        var config = {
            xtype: 'd3-tree',
            flex: 1,
            nodeSize: [250, 30],
            nodeRadius: 10,
            interactions: {
                type: 'panzoom',
                zoom: {
                    extent: [0.3, 3],
                    doubleTap: false
                }
            },
            platformConfig: {
                desktop: {
                    nodeSize: [250, 20],
                    nodeRadius: 5
                }
            },
            store: {
                type: 'tree',
                rootVisible: true,
                root: {
                    name: root,
                    expanded: true
                }
            },
            nodeText: function (component, node) {
                var record = node.data,
                    text = record.get('name');
            
                return text;
            },
            listeners: {
                scenesetup: function(component, scene, eOpts) {
                    var me = this;
                    Ext.get(Ext.fly(scene.node())).on('click', function(ev, circle) {
                        var d3Tree = this;
                        var treeModel = circle.__data__.data;
                        if(!treeModel) return false;
                        var data = treeModel.getData();
                        
                        d3Tree.fireEvent('d3NodeSelect', data)
                    }, me);
                }
            }
        }
        var d3Tree = Ext.create(config);
        return d3Tree;
    },
    onD3NodeSelect: function(data) {
        var me = this,
            lifecycle = me.lookup('lifecycle'),
            descriptionPane = lifecycle.getDescriptionPane();

        descriptionPane.removeAll(true);

        if(data.moreInfo.hasOwnProperty('fnContent')) {
            descriptionPane.setFnData({
                fnName: data.name,
                fnContent: data.moreInfo['fnContent']
            });
        }

        if(data.moreInfo.hasOwnProperty('moreSteps')) {
            descriptionPane.setMoreSteps(data.moreInfo['moreSteps']);
        }
    }
});