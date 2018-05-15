/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Training.Application',

    name: 'Training',

    requires: [
        // This will automatically load all classes in the Training namespace
        // so that application classes do not need to require each other.
        'Training.*'
    ],

    // The name of the initial view to create.
    mainView: 'Training.view.main.Main'
});
