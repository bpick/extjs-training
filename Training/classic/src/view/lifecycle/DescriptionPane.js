Ext.define('Training.view.lifecycle.DescriptionPane', {
    extend: 'Ext.panel.Panel',
    xtype: 'descriptionpane',
    
    title: 'Description Pane',
    frame: true,
    padding: 10,
    scrollable: true,
    config: {
        fnData: undefined,
        moreSteps: undefined
    },
    updateFnData: function(fnData) {
        var fnName = fnData.fnName,
            fnContent = fnData.fnContent;
        var highlightCode = Prism.highlight(fnContent, Prism.languages.js);
        var html = Ext.String.format('<h2 class="title">{0}</h2>', fnName);
        html += Ext.String.format('<pre class="language-js"><code class="language-js">{0}</code></pre>', highlightCode);
        var cmp = Ext.create('Ext.Component', {
            html: html
        });

        this.add(cmp);
    },
    updateMoreSteps: function(moreSteps) {
        var html = "";
        if(Ext.isString(moreSteps)) {
            html = moreSteps;
        }

        if(Ext.isArray(moreSteps)) {
            var listSteps = Ext.Array.map(moreSteps, function(step) {
                return "<li>" + step + "</li>";
            });

            Ext.Array.each(listSteps, function(step) {
                html +=step;
            });

        }

        var cmp = Ext.create('Ext.Component', {
            html: '<h2>More Information</h2><ul>' + html + '</ul>'
        });

        this.add(cmp);

    }
});