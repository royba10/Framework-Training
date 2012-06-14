Ext.define('App.view.application.ApplicationView',{
	
	extend: 'Ext.container.Container',
	alias: 'widget.applicationview',
	
	initComponent: function(){
		this.items = [
			{
				xtype: 'toolbar',
				name: 'mainToolbar',
				defaults: {
					allowDepress: false,
                    enableToggle: true,
                    toggleGroup: 'mainToolBar'
				},
				cls: 'mainToolbar'
			},
			{
				xtype: 'toolbar',
				cls: 'viewsToolbar',
				defaults: {
					allowDepress: false
				},
				name: 'viewsToolbar'
			},
			{
				xtype: 'container',
				name: 'mainContainer',
				cls: 'mainContainer',
				autoScroll: true,
				layout: 'card'
			}
		];
		this.callParent(arguments);
	}
	
});