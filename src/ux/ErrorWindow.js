Ext.define('App.ux.ErrorWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.errorwindow',
    resizable: false,
    modal: true,
    closable: true,
    width: 350,
    height: 200,
    layout: 'fit',

    /** Error message to be displayed */
    errorMessage: '',

    initComponent: function(){
        this.items = [
            {
                xtype: 'textarea',
                editable: false,
                value: this.errorMessage
            }
        ];
        this.callParent(arguments);
    }
});